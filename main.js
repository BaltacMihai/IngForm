
// https://lion-web-components.netlify.app/?path=/docs/forms-validation-examples--required-validator

export const FormValidationReset = () => html`

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Orange Bank login</title>

</head>
<body>
    <div class="navbar">
        <img src="logo.png" alt="logo" class="padding-5">
        <a href="#" class="padding-5"> <- Back</a>
    </div>
    <div class="mid-section">
        <lion-form id="wideRightLayout" name="Login" action="simple.php" onsubmit="logginSucces()" method="post" responsive>
        <form>
        <lion-input
          label="Orange Bank ID"
          name="orangeBankID"
          .validators="${[new Required()]}"
          id="id"
        ></lion-input>
        
        <lion-input
          label="Card Number"
         name="cardNumber"
         .validators="${[new Required(), new EqualsLength(18)]}";
         .modelValue=${'NL20INGB0001234567XXXX'}
         help-text="You can use format like XXXX XXXX XXXX XXXX XX, without spaces"
         id="name"
        
        ></lion-input>
        
         <lion-checkbox
           label="Archimedes"
           .choiceValue=${'Save Credentials'}
           help-text="Do you want to save your credentials?"
        
         ></lion-checkbox>
         <div class="buttons">
              <lion-button type-button raised
              @click=${ev => {
        
               let logginSucces = class {
                constructor(id, name) {
                    this.id = id;
                    this.name = name;
                  }
        
               }
        
                alert(logginSucces.name);
              }}
              >Submit</lion-button>
              <lion-button
                type="button"
                raised
                @click=${ev => {
                  console.log(ev.currentTarget.parentElement.parentElement.parentElement);
                  ev.currentTarget.parentElement.parentElement.parentElement.resetGroup();
                }}
                >Reset</lion-button
              >
            </div>
        </form>
        </lion-form>
    </div>
    <div class="footer">
        <p>This site is done as an Assignment for ING Tech</p>
    </div>
</body>

<style>
    html,body{
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
flex-direction: column;
font-family:'Courier New', Courier, monospace;
    font-weight: 50;
}
.navbar{
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    padding-left: 5%;
}
a{
    text-decoration: none;
    font-weight: 100;
    padding-left: 5%;
    color:rgb(0, 0, 0);
}
.mid-section {
background: #ff8d14;
width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    align-items: center;
 
  
}

form{
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    align-items: center;
}


lion-input{
    border:none;
    border-radius: 10px;
    padding:1em;

}
lion-button{
    background-color: black;
    color: white;
    padding:1.2em;
}
lion-button:hover{
    transform: scale(1.1);
    transition-duration: 0.5s ;
}

lion-button:active{
    box-shadow: 0 10px #00aa77;
    transform: translate(5px);
}
#login{
    margin: 1em;
}

.footer{
    background-color: black;
    color:white;
    text-align: center;
}


</style>
</html>


`;
