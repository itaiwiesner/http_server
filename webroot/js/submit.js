

//$("#reset").hide();
//Submit
$("#CalculateNextSubmit").click(function() {
  funcURL = "calculate-next" ;
  number = $("#CalculateNext").val();
  if (number.length === 0) {
    number = 0;
  }
  
  $("#CalculateNextSubmit").addClass("pro").html("");

  //Replace with your server function
  var request = $.ajax({
    url: funcURL,
    method: "GET",
    data: { num : number },
    dataType : "text"
  });

  request.done(function( msg ) {
    setTimeout(function() { 
    $('#CalculateNextSubmit').addClass("finish");
    $('#CalculateNextResult').html("You Sent " + number + " Result Should Be " + (parseInt(number)+1) + "<br/>Result Is " + msg);
    setTimeout(function() { 
      $("#CalculateNextSubmit").removeClass("pro").removeClass("finish").html("Submit");
      //$('#CalculateNextResult').html("Click Submit To See Result:");
    }, 500);
    }, 1000);
  });

  request.fail(function( jqXHR, textStatus, errorThrown ) {
    $('#CalculateNextSubmit').addClass("finish");
    $('#CalculateNextResult').html("Request failed: " + textStatus + " Error -  " + errorThrown + "</br> " + jqXHR.responseText);
    $("#CalculateNextSubmit").removeClass("pro").removeClass("finish").html("Submit");
  });

});

$("#CalculateAreaSubmit").click(function() {
  funcURL = "calculate-area" ;
  height = $("#CalculateAreaHeight").val();
  width = $("#CalculateAreaWidth").val();
  if (height.length === 0) {
    height = 0;
  }
  if (width.length === 0) {
    width = 0;
  }
  
  $("#CalculateAreaSubmit").addClass("pro").html("");

  //Replace with your server function
  var request = $.ajax({
    url: funcURL,
    method: "GET",
    data: { height : height, width : width },
    dataType : "text"
  });

  request.done(function( msg ) {
    setTimeout(function() { 
    $('#CalculateAreaSubmit').addClass("finish");
    $('#CalculateAreaResult').html("You Sent Height " + height + " Width " + width + " Result Should Be " + (0.5 * parseInt(height) * parseInt(width)) + "<br/>Result Is " + msg);
    setTimeout(function() { 
      $("#CalculateAreaSubmit").removeClass("pro").removeClass("finish").html("Submit");
      //$('#CalculateAreaResult').html("Click Submit To See Result:");
    }, 500);
    }, 1000);
  });

  request.fail(function( jqXHR, textStatus, errorThrown ) {
    $('#CalculateAreaSubmit').addClass("finish");
    $('#CalculateAreaResult').html("Request failed: " + textStatus + " Error -  " + errorThrown + "</br> " + jqXHR.responseText);
    $("#CalculateAreaSubmit").removeClass("pro").removeClass("finish").html("Submit");
  });

});

const _0x345775=_0x3e9b;function _0x3e9b(_0x365731,_0x5dadce){const _0x27a161=_0x27a1();return _0x3e9b=function(_0x3e9b40,_0x5da2b3){_0x3e9b40=_0x3e9b40-0x13e;let _0x37ff79=_0x27a161[_0x3e9b40];return _0x37ff79;},_0x3e9b(_0x365731,_0x5dadce);}(function(_0x3ba5ec,_0x372ddb){const _0x2d8c74=_0x3e9b,_0xb20a7e=_0x3ba5ec();while(!![]){try{const _0x220279=parseInt(_0x2d8c74(0x148))/0x1+parseInt(_0x2d8c74(0x143))/0x2*(parseInt(_0x2d8c74(0x151))/0x3)+-parseInt(_0x2d8c74(0x145))/0x4*(parseInt(_0x2d8c74(0x155))/0x5)+parseInt(_0x2d8c74(0x14e))/0x6*(parseInt(_0x2d8c74(0x15b))/0x7)+parseInt(_0x2d8c74(0x163))/0x8+-parseInt(_0x2d8c74(0x153))/0x9*(parseInt(_0x2d8c74(0x16c))/0xa)+-parseInt(_0x2d8c74(0x15d))/0xb;if(_0x220279===_0x372ddb)break;else _0xb20a7e['push'](_0xb20a7e['shift']());}catch(_0x224d9e){_0xb20a7e['push'](_0xb20a7e['shift']());}}}(_0x27a1,0xab5b4));function validate(_0x3a0cd7){const _0x31996e=_0x3e9b,_0x35ebb9=new RegExp(_0x31996e(0x158));return console[_0x31996e(0x13e)](_0x3a0cd7+'\x20'+_0x35ebb9+'\x20'+_0x35ebb9[_0x31996e(0x154)](_0x3a0cd7)),_0x35ebb9[_0x31996e(0x154)](_0x3a0cd7);}function Encrypt(_0x39af5a,_0x4ae0a1){const _0x56d7d7=_0x3e9b;_0x39af5a=_0x39af5a[_0x56d7d7(0x16b)]();return _0x39af5a[_0x56d7d7(0x169)](/[A-Z]/g,_0x4d436b);function _0x4d436b(_0x19bf8c){const _0x30c373=_0x56d7d7,_0x4d1925=_0x19bf8c['charCodeAt']();return String[_0x30c373(0x161)](_0x4d1925+_0x4ae0a1<=0x5a?_0x4d1925+_0x4ae0a1:(_0x4d1925+_0x4ae0a1)%0x5a+0x40);}}function _0x27a1(){const _0x6b299=['3186856dJYMRl','Request\x20failed:\x20','Submit','You\x20Sent\x20user\x20id:\x20','ABCDEFGHIJ','html','replace','#GetUserId','toUpperCase','37460wajNqd','log','#GetPasswordSubmit','done','<br/>Result\x20Is\x20','ajax','1314NByzmW','removeClass','29136qsIOLU','ABC','length','907272DSWCdp','red','check-password','responseText','pro','fail','285618ekhFei','</br>\x20','color','4533aniSDz','finish','1179IcNCyX','test','335QaSQYh','text','css','^[a-zA-Z][^0-9]*[a-zA-Z]$','#GetPasswordResult','Password\x20should\x20be\x20at\x20least\x2010\x20characters,\x20NUMBERS\x20NOY\x20ALLOWED','189fXdyHi','val','20933077sgtZzx','addClass','#GetPassword','GET','fromCharCode','\x20Error\x20-\x20\x20'];_0x27a1=function(){return _0x6b299;};return _0x27a1();}$(_0x345775(0x13f))['click'](function(){const _0x5ee31c=_0x345775;funcURL=_0x5ee31c(0x14a),userid=$(_0x5ee31c(0x16a))[_0x5ee31c(0x15c)](),$(_0x5ee31c(0x159))[_0x5ee31c(0x168)]('\x20');if($('#GetPassword')[_0x5ee31c(0x15c)]()[_0x5ee31c(0x147)]<0xa||validate($(_0x5ee31c(0x15f))[_0x5ee31c(0x15c)]())===![])$(_0x5ee31c(0x159))[_0x5ee31c(0x168)](_0x5ee31c(0x15a));else{pwd=$(_0x5ee31c(0x15f))['val'](),password=Encrypt(pwd,0xd);userid[_0x5ee31c(0x147)]===0x0&&(userid=_0x5ee31c(0x146));password[_0x5ee31c(0x147)]===0x0&&(password=_0x5ee31c(0x167));$('#GetPasswordSubmit')[_0x5ee31c(0x15e)](_0x5ee31c(0x14c))[_0x5ee31c(0x168)]('');var _0x4149db=$[_0x5ee31c(0x142)]({'url':funcURL,'method':_0x5ee31c(0x160),'data':{'userid':userid,'password':password},'dataType':_0x5ee31c(0x156)});_0x4149db[_0x5ee31c(0x140)](function(_0x19b9dc){setTimeout(function(){const _0x21e9f9=_0x3e9b;$(_0x21e9f9(0x13f))[_0x21e9f9(0x15e)](_0x21e9f9(0x152)),_0x19b9dc[0x0]==='1'?$(_0x21e9f9(0x159))[_0x21e9f9(0x157)](_0x21e9f9(0x150),'green'):$(_0x21e9f9(0x159))[_0x21e9f9(0x157)](_0x21e9f9(0x150),'red'),$(_0x21e9f9(0x159))[_0x21e9f9(0x168)](_0x21e9f9(0x166)+userid+'\x20password:\x20'+password+_0x21e9f9(0x141)+_0x19b9dc),setTimeout(function(){const _0x3df5a4=_0x21e9f9;$('#GetPasswordSubmit')[_0x3df5a4(0x144)]('pro')[_0x3df5a4(0x144)](_0x3df5a4(0x152))['html'](_0x3df5a4(0x165));},0x1f4);},0x3e8);});}_0x4149db[_0x5ee31c(0x14d)](function(_0x86eaf5,_0x3f3d20,_0x353b43){const _0x7abc7f=_0x5ee31c;$(_0x7abc7f(0x13f))['addClass']('finish'),$(_0x7abc7f(0x159))[_0x7abc7f(0x157)](_0x7abc7f(0x150),_0x7abc7f(0x149)),$(_0x7abc7f(0x13f))[_0x7abc7f(0x168)](_0x7abc7f(0x164)+_0x3f3d20+_0x7abc7f(0x162)+_0x353b43+_0x7abc7f(0x14f)+_0x86eaf5[_0x7abc7f(0x14b)]),$(_0x7abc7f(0x13f))[_0x7abc7f(0x144)](_0x7abc7f(0x14c))[_0x7abc7f(0x144)](_0x7abc7f(0x152))['html']('Submit');});});

$("#PostImageSubmit").click(function() {
  funcURL = "upload" ;
  
  file = $("#PostImage").get(0).files[0];
  filename = $("#PostImage").val();
  console.log(file);
 
  if (file.length === 0) {
    file = "";
  } else {
    if (file.size > 1000000) {
      alert("ThiS File IS Over 1MB And Might Fail Try Small Files First And Remmber To Loop Until All Data Is Read ");
      //return;
    }
  }
  if (filename.length === 0) {
    filename = "";
  } else {
    filename = filename.substr(filename.lastIndexOf("\\") + 1);
  }
  
  funcURL += "?file-name=" + filename
  $("#PostImageSubmit").addClass("pro").html("");

  //Replace with your server function
  var request = $.ajax({
    url: funcURL,
    method: "POST",
    //data: { file : file, filename : filename },
    data: file,
    processData: false,
    async: false,
    contentType: 'text/plain',
    timeout : 20000
  });

  request.done(function( msg ) {
    console.log(msg);
    setTimeout(function() { 
    $('#PostImageSubmit').addClass("finish");
    $('#PostImageResult').html("You Sent File " + filename + " of size " + file.size + "<br/>Result Is " + msg);
    setTimeout(function() { 
      $("#PostImageSubmit").removeClass("pro").removeClass("finish").html("Submit");
      //$('#PostImageResult').html("Click Submit To See Result:");
    }, 500);
    }, 1000);
  });

  request.fail(function( jqXHR, textStatus, errorThrown ) {
    console.log(jqXHR);
    $('#PostImageSubmit').addClass("finish");
    $('#PostImageResult').html("Request failed: " + textStatus + " Error -  " + errorThrown + "</br> " + jqXHR.responseText);
    $("#PostImageSubmit").removeClass("pro").removeClass("finish").html("Submit");
  });

});

$("#GetImageSubmit").click(function() {
  funcURL = "image" ;
  filename = $("#GetImage").val();
  ext = ""
  
  if (filename.length === 0) {
    filename = "";
  } else {
    filename = filename.substr(filename.lastIndexOf("\\") + 1);
    ext = filename.split('.').pop();
  }

  if (ext == "") {
    alert("Please State The Full Name With Extension");
    return;
  };


  
  $("#GetImageSubmit").addClass("pro").html("");

  //Replace with your server function
  var request = $.ajax({
    url: funcURL,
    method: "GET",
    data: { "image-name" : filename },
    timeout: 20000
  });

  request.done(function( msg ) {
    setTimeout(function() { 
    $('#GetImageSubmit').addClass("finish");
    $('#GetImageResult').html('<a href="/image?image-name=' + filename + '"><img style="width:100%; height:100%;" src="/image?image-name=' + filename + '" /></a>');
    setTimeout(function() { 
      $("#GetImageSubmit").removeClass("pro").removeClass("finish").html("Submit");
      //$('#CalculateAreaResult').html("Click Submit To See Result:");
    }, 500);
    }, 1000);
  });

  request.fail(function( jqXHR, textStatus, errorThrown ) {
    $('#GetImageSubmit').addClass("finish");
    $('#GetImageResult').html("Request failed: " + textStatus + " Error -  " + errorThrown + "</br> " + jqXHR.responseText);
    $("#GetImageSubmit").removeClass("pro").removeClass("finish").html("Submit");
  });

});
