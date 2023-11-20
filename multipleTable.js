function multi() {
    let num = parseInt(document.getElementById("multiNum").value);
    let result = document.getElementById("resultForMulti");
    let  u;
    for (i = num; i <= 1000; i++) {
       u = num * i;
     document.write(`${i} X ${num}=${u}<br>`);
    }
  
}