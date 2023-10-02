//変数の宣言
let num;

//変数の宣言
num = 5;

//3の倍数と5の倍数の時”3と5の倍数です”と出力
if(( num % 15 ) === 0 ) {
  console.log('3と5の倍数です');
}

//3の倍数の時”3の倍数です”と出力
else if ( ( num % 3 ) === 0 ){
  console.log('3の倍数です');
}

//5の倍数の時”5の倍数です”と出力
else if( ( num % 5 ) === 0 ){
  console.log('5の倍数です');
}


//それ以外変数を出力
else {
  console.log(num);
}
