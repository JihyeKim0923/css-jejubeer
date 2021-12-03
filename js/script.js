function Menu(name, url){
    document.write("<li><a href='"+url+"'>"+name+"</a></li>");
}

function Foot(comName, CEOName, addr, hostname, businessNum, MOBRNum, respon,tel, email){
    document.write(comName+" 대표이사 "+CEOName+"<br>"+addr+"<br> 호스팅 제공자 "+hostname+" &nbsp;&nbsp;&nbsp; 사업자 등록번호 "+businessNum+"  &nbsp;&nbsp;&nbsp;통신판매업신고번호 "+MOBRNum+"<br>개인정보보호책임자"+respon+" &nbsp;&nbsp;&nbsp; 고객센터 "+tel+", "+email);
}

let createHeader=function(){
    
}