import socket
import os
import math

# constants
IP = '127.0.0.1'
PORT = 9009
DEFAULT_URL = '\\index.html'
NOT_FOUND_URL = '\\notfound.html'
VALID_METHODS = 'GET', 'POST'
SOCKET_TIMEOUT = 30
FORBIDDEN_URL = '\\imgs\\403forbidden.jpg'
INVALID_PARAMS_URL = '\\error500.html'
EMPTY_URL = '\\empty.html'
REDIRECTION_DICTIONARY = {'/': DEFAULT_URL, '\\index2.html': DEFAULT_URL}
FORBIDDEN_LIST = [EMPTY_URL, NOT_FOUND_URL, INVALID_PARAMS_URL]
VERSION = 'HTTP/1.1'
OK = "200 OK"
REDIRECTED = "302 Found"
NOT_FOUND = '404 Not Found'
FORBIDDEN = '403 Forbidden'
INVALID_PARAMS = '500 Internal Server Error'
ROOT_DIR = f'{os.getcwd()}\\webroot'
CONTENT_TYPE = {"html": "text/html; charset=UTF-8", "text": "text/html; charset=UTF-8", "jpg": "image/jpg",
                "js": "text/javascript; charset=UTF-8", "css": "text/css", "ico": "ico", "png": "image/png",
                "jpeg": "image/jpeg", "gif": "gif"}

ENCODING_DIC = {'N': 'a', 'O': 'b', 'P': 'c', 'Q': 'd', 'R': 'e', 'S': 'f', 'T': 'g', 'U': 'h', 'V': 'i', 'W': 'j',
                'X': 'k', 'Y': 'l', 'Z': 'm', 'A': 'n', 'B': 'o', 'C': 'p', 'D': 'q', 'E': 'r', 'F': 's', 'G': 't',
                'H': 'u', 'I': 'v', 'J': 'w', 'K': 'x', 'L': 'y', 'M': 'z'}
PASSWORDS_DIC = {'admin': 'kingdavidone'}

UPLOAD_DIR = ROOT_DIR + '\\uploads\\'


def is_number(num):
    """
    gets a string and checks if it represents an integer number
    """
    try:
        int(num)
    except ValueError:
        return False
    else:
        return True


def handle_check_password(username, password):
    """ Gets an username and a password generates a proper message for 'check-password' requests """
    encoded_password = ''.join([ENCODING_DIC[x] for x in password])
    if username in PASSWORDS_DIC:
        if PASSWORDS_DIC[username] == encoded_password:
            return 'Correct username and password'
        else:
            return 'Incorrect password'
    else:
        return "This username doesn't exist"


def get_params(resource):
    """
    checks if request with params is valid, if it is returns the resource and a proper . For example, if resource is: '/calculate-next?num=2',
    the output will be: True, '/calculate-next', '22'
    """
    params = resource.split('?')[-1]
    resource = resource.split('?')[0]

    # handle requests with exactly 1 param
    if resource == '/upload' or resource == '/image' or resource == '/calculate-next':
        param = params.split('=')[0]
        value = params.split('=')[-1]

        if (resource == '/upload' and param == 'file-name') or \
                (resource == '/image' and param == 'image-name' and os.path.isfile(UPLOAD_DIR + value)):
            return True, OK, resource, value

        if resource == '/calculate-next' and param == 'num' and is_number(value):
            return True, OK, resource, f'{value} + 1 = {int(value) + 1}'

        return False, INVALID_PARAMS, resource, 'invalid params'

    # handle requests with exactly 2 params
    elif resource == '/calculate-area' or resource == '/check-password':
        first = params.split('&')[0]
        second = params.split('&')[-1]

        first_param, first_value = first.split('=')[0], first.split('=')[-1]
        second_param, second_value = second.split('=')[0], second.split('=')[-1]

        if resource == '/calculate-area' and first_param == 'height' and second_param == 'width' and \
                is_number(first_value) and is_number(second_value):
            return True, OK, resource, f'({first_value} * {second_value}) / 2 = {(int(first_value) * int(second_value)) / 2}'

        if resource == '/check-password' and first_param == 'userid' and second_param == 'password':
            return True, OK, resource, [first_value, second_value]

        return False, INVALID_PARAMS, resource, 'invalid params'

    return False, NOT_FOUND, resource, ' '


def create_header(file_name, file_type, status_code):
    return f"{VERSION} {status_code}\r\n " \
           f"Content-Length: {os.path.getsize(file_name)}\r\n " \
           f"Content-Type: {CONTENT_TYPE[file_type]}\r\n\r\n".encode()


def create_data(file_name, file_type, msg):
    """
    Get data from file
    return binary
    """
    img_endings = ('png', 'jpg', 'jpeg', 'gif', 'ico')
    if file_type in img_endings:
        with open(file_name, 'rb') as f:
            data = f.read()
    else:
        with open(file_name, encoding='UTF-8') as f:
            data = f.readlines()
            if file_name == ROOT_DIR + EMPTY_URL:
                data[9] = msg
            data = ''.join(data).encode()

    return data


def handle_upload_image(file_name, content_length, client_socket):
    """
    Gets a file_name and its size. Checks if the file is an image and handles it accordingly
    """
    counter = math.ceil(content_length / 10000)
    if file_name.lower().endswith(('.png', '.jpg', 'gif', '.jpeg', '.ico')):
        save_loc = UPLOAD_DIR + file_name
        with open(save_loc, 'wb') as f:
            # save the image in the right directory
            for _ in range(counter):
                x = client_socket.recv(10000)
                f.write(x)
            return 'Received successfully'

    # clean the socket if the file sent isn't an image
    for _ in range(counter):
        client_socket.recv(10000)
    return 'Not an image'


def handle_client_request(method, resource, client_socket):
    """ Check the required resource, generate proper HTTP response and send to client"""
    msg = ''

    if resource[0] in REDIRECTION_DICTIONARY:
        status_code = REDIRECTED
        file_name = ROOT_DIR + REDIRECTION_DICTIONARY[resource[0]]

    elif resource[0] in FORBIDDEN_LIST:
        status_code = FORBIDDEN
        file_name = ROOT_DIR + FORBIDDEN_URL

    elif resource[0] == '/index.html':
        status_code = OK
        file_name = ROOT_DIR + DEFAULT_URL

    elif os.path.isfile(ROOT_DIR + resource[0]):
        status_code = OK
        file_name = ROOT_DIR + resource[0]

    else:

        valid_params, status_code, url, msg = get_params(resource[0])
        if valid_params:
            file_name = ROOT_DIR + EMPTY_URL

            if url == '/check-password':
                msg = handle_check_password(msg[0], msg[1])
                print(msg)

            elif url == '/upload' and method == 'POST':
                msg = handle_upload_image(msg, resource[1], client_socket)

            elif url == '/image':
                file_name = UPLOAD_DIR + msg

        elif status_code == NOT_FOUND:
            file_name = ROOT_DIR + NOT_FOUND_URL

        else:
            file_name = ROOT_DIR + EMPTY_URL

    file_type = file_name.split('.')[-1]

    if file_type in CONTENT_TYPE:
        http_header = create_header(file_name, file_type, status_code)
        http_data = create_data(file_name, file_type, msg)
        client_socket.send(http_header + http_data)


def validate_http_request(request):
    """ Check if request is a valid HTTP request and returns TRUE / FALSE and the requested URL """
    request.replace('/', '\\')
    request = request.split('\r\n')
    header = request[0].split()
    method = header[0]
    version = header[-1]
    if method in VALID_METHODS and version == VERSION:
        if method == 'GET':
            return True, method, [header[1]]
        if method == 'POST':
            content_length = int([x.split()[1] for x in request if x != '' if x.split()[0] == 'Content-Length:'][0])
            return True, method, [header[1], content_length]
    return False, '', []


def handle_client(client_socket):
    """ Handles client requests: verifies client's requests are legal HTTP, calls function to handle the requests """
    print('Client connected')
    client_request = client_socket.recv(100000).decode()
    print(client_request)
    valid_http, method, resource = validate_http_request(client_request)
    if valid_http:
        print('Got a valid HTTP request')
        handle_client_request(method, resource, client_socket)
    else:
        print('Error: Not a valid HTTP request')
        print('Closing connection')
    client_socket.close()


def main():
    # Open a socket and loop forever while waiting for clients
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server_socket.bind((IP, PORT))
    server_socket.listen(10)
    print(f"Listening for connections on port {PORT}")

    while True:
        client_socket, client_address = server_socket.accept()
        print('New connection received')
        client_socket.settimeout(SOCKET_TIMEOUT)
        handle_client(client_socket)


if __name__ == '__main__':
    main()
