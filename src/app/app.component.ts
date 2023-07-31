import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password=''

  length=0;
  readLength(vada:any){
    console.log(vada.target.value);
    this.length=vada.target.value;
  }

  passG(){
    //console.log("password Generated")
    //this.password='kuch bhi'

    //console.log(this.useLetters+'useLetters')
    //console.log(this.useNumbers+'useNumbers')
    //console.log(this.useSymbols+'useSymbols')

    const letterChar='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numberChar='0123456789'
    const symbolChar='!@#$%^&*()_'

    var validChar=letterChar+numberChar+symbolChar;

    let generatedPass=''

    for(var s=0; s<this.length; s++){
      console.log(validChar.charAt(Math.round(Math.random()*validChar.length)));

      generatedPass += (validChar.charAt(Math.round(Math.random()*validChar.length)));
    }

    //console.log(validChar);

    this.password=generatedPass;
  }

  useLetters:boolean=false;
  useNumbers:boolean=false;
  useSymbols:boolean=false;
  onChangeUseLetter(){
    this.useLetters=!this.useLetters;
  }

  onChangeUsenumbers(){
    this.useNumbers=!this.useNumbers;
}

onChangeUseSymbols(){
  this.useSymbols=!this.useSymbols;
}

tooglebool1:boolean=true;
tooglebool2:boolean=true;
tooglebool3:boolean=true;

changeLetter(event:any){
  if(event.target.checked){
    this.tooglebool1=false;
  }
  else{
    this.tooglebool1=true;
  }
}
changeNumber(event:any){
  if(event.target.checked){
    this.tooglebool2=false;
  }
  else{
    this.tooglebool2=true;
  }
}

changeSymbol(event:any){
  if(event.target.checked){
    this.tooglebool3=false;
  }
  else{
    this.tooglebool3=true;
  }
}


}
