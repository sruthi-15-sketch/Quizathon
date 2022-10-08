import { toBeDisabled } from "@testing-library/jest-dom";
import React, {useRef, useEffect, useState } from "react";
import authService from "../services/auth.service";
import Pagination from "./Pagination"
import Score from "./Score"
import axios from 'axios'



function PaginationComponent() {
  const [data, setData] = useState([]);
  const [index,setIndex] = useState(0);
  const [flag,setFlag] = useState(true);
  let score=0;
  let final_score=0;
  const [scores,setScores]=useState({
    "id":"",
    "score":""
})
  useEffect(() => {
    fetch("http://localhost:8090/api/auth/mcq/display_questions")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  function Post(props) {
    const { question,optionOne,optionTwo,optionThree,optionFour } = props.data;
    console.log(props.nextPage);
    return (
      <div className="post">
        <div class="mcq_question">{question}</div>
        <div class="mcq_answers" value="mcq_options">
        <button type="submit" class="mcq_answer" value={optionOne} onClick={()=>{handleClick({question},{optionOne},"optionOne",props.nextPage)}}>{optionOne}</button>
        <button type="submit" class="mcq_answer" value={optionTwo} onClick={()=>handleClick({question},{optionTwo},"optionTwo",props.nextPage)}>{optionTwo}</button>
        <button type="submit" class="mcq_answer" value={optionThree} onClick={()=>handleClick({question},{optionThree},"optionThree",props.nextPage)}>{optionThree}</button>
        <button type="submit" class="mcq_answer" value={optionFour} onClick={()=>handleClick({question},{optionFour},"optionFour",props.nextPage)}>{optionFour}</button>

      </div>
      
      </div>
      
    );
  }                    
  // const disableButton = event=>{
  //   event.currentTarget.disabled = true;   

  // }
   function handleClick(question,option,optionNumber,nextPage){
    let stringified_option;
    if(optionNumber === "optionOne"){
      stringified_option = JSON.stringify(option.optionOne).replace(/"/g,"");

    }
    else if(optionNumber === "optionTwo"){
      stringified_option = JSON.stringify(option.optionTwo).replace(/"/g,"");

    }
    else if(optionNumber === "optionThree"){
      stringified_option = JSON.stringify(option.optionThree).replace(/"/g,"");

    }
    else if(optionNumber === "optionFour"){
      stringified_option = JSON.stringify(option.optionFour).replace(/"/g,"");

    }
  
    
    let stringified_question = JSON.stringify(question.question).replace(/"/g,"");


      for(let i=0;i<data.length;i++){
        // console.log(stringified_question)
        // console.log(option+" "+optionNumber);
        
           if (data[i].question == stringified_question){
            console.log(stringified_question+" "+data[i].answer)

            if (stringified_option===data[i].answer){
                  score++;
                  final_score=score;
                 console.log(score);
                  console.log("holaa");
            };
            nextPage();
            
           }
           if(i==data.length-1){
            final_score=score;
            const id = JSON.parse(localStorage.getItem("user")).id;
            console.log(id+" "+score);
            axios.post("http://localhost:8090/api/auth/insert_scores",{id,score});
            
           }

      }
      console.log(final_score);
    }
  
  
  return(
    <div>
      <>
        <Pagination
          data={data}
          RenderComponent={Post}
          pageLimit={1}
          dataLimit={1}
        />
      </>
   
     
 
  </div>

  )
}

export default PaginationComponent;