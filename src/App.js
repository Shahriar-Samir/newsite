import React from "react";

// import components
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

function Add(){
  const [items, amount] = React.useState([""])
  const [text, newtext] = React.useState([""])


  function new_text(value){
     newtext(value.target.value)
  }

  function add_item(){

       amount(old_items =>
         [...old_items , `User: ${text}`]
       )
       if(text=="hi"
       || text=="hey"
       || text=="hello"){
        amount(old_items =>
          [...old_items , `Chat_bot: ${text}, how can i help you ?`]
        )
       }

       else if(text == ""){
        amount(old_items =>
          [...old_items , `Chat_bot: You have nothing inputed`]
        )
       }

       else if(text=="okay"
      || text=="okay"
      || text=="ok"
      || text=="yes"
      || text=="right"
      || text=="ow"
      || text=="oh"
      || text=="hm"
      || text=="yap"
      || text=="alright"){
        amount(old_items =>
          [...old_items , `Chat_bot: How can I help you ?`]
        )
      }
      
      else if(text=="I need my email"
      || text=="I need my mail"){
        amount(old_items =>
          [...old_items , `Chat_bot: Your Email is shabusiness@gmail.com`]
        )
      }
  }

  
  function remove_item(){
    items.pop()
    amount(old_items =>
      [...old_items]
    )
}






  const element_items = items.map(item=>
     <p key={item} >{item}</p>
         
)

  return(
    <div className="mb-5">
    <div className="d-flex flex-column align-items-start">{element_items}</div>
    <input type="text" onChange={new_text}/>
    <button onClick={add_item}>Add Item</button>
    <button onClick={remove_item}>Remove Item</button>
 
    </div>
  )
}









export default function App(){







    return(
      <div className="d-flex flex-column justify-content-between align-items-center all">
      <Header/>
      <Main/>
      <Add/>
      <Footer/>

      </div>
    )
}