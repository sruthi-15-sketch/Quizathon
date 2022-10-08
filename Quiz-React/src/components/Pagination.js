import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Score from './Score';

function Pagination({ data, RenderComponent, title, pageLimit, dataLimit }) {
    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);
    const history = useHistory();
    const [flag,setFlag]=useState(false);
    const [score,setScore] = useState(0);
    const[show,setShow]=useState(true);
    const id = JSON.parse(localStorage.getItem("user")).id;
    // useEffect(()=> {
    //   console.log(currentPage);
    // },[currentPage])
    useEffect(() => {
      const timer = setTimeout(() => {
        fetch(`http://localhost:8090/api/auth/display_score/${id}`)
        .then((response) => response.json())
        .then((json) => setScore(json));
      }, 10);
      return () => clearTimeout(timer);
    }, []);
    function goToNextPage() {
       // not yet implemented
       console.log("page"+" "+currentPage);
       setCurrentPage((page) => page + 1);
      //  console.log("last page1");
    }


    // function lastPage(){
    //   console.log("last page");
    //   if (currentPage===pages){
    //     console.log("last page");
    //   }
    // }
  
    function goToPreviousPage() {
       // not yet implemented

       setCurrentPage((page) => page - 1);
    }
  
    function changePage(event) {
       // not yet implemented
       const pageNumber = Number(event.target.textContent);
  setCurrentPage(pageNumber);
    }
    // function changeDetails(e){

    //   let value = e.target.value;
    //   setProduct({...score,[e.target.name]:value});

    // };

    // function sendScore(score){
    //   axios.post("http://localhost:8090/api/auth/result/insert_scores",score)
    // }
  
    const getPaginatedData = () => {
       // not yet implemented
       const startIndex = currentPage * dataLimit - dataLimit;
  const endIndex = startIndex + dataLimit;
  return data.slice(startIndex, endIndex);
    };
  
    const getPaginationGroup = () => {
       // not yet implemented
       let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
  return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };

    // const setButton=(button_hide,b)=>{
    //   button_hide="hidden";
    // }
  
    return (
        <div>
        <h1>{title}</h1>
    
        {/* show the posts, 10 posts at a time */}
        <div className="dataContainer">
          {getPaginatedData().map((d, idx) => (
            <RenderComponent key={idx} data={d} nextPage={goToNextPage} />
          ))}
        </div>
    
        {/* show the pagiantion
            it consists of next and previous buttons
            along with page numbers, in our case, 5 page
            numbers at a time
        */}
        <div className="pagination" >
          {/* previous button */}
          {/* <button  
            onClick={goToPreviousPage}
            className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
          >
            prev
          </button>
     */}
          {/* show page numbers */}
          {/* {getPaginationGroup().map((item, index) => (
            <button 
              key={index}
              onClick={changePage}
              className={`paginationItem ${currentPage === item ? 'active' : null}`}
            >
              <span>{item}</span>
            </button>
          ))} */}
     {/* onClick={() => {
          greeting();
          waveHello();
        }} */}
          {/* next button */}
          {/* {setButton(button_hide,false)} */}
          <button 
            onClick={()=>{goToNextPage();{setFlag(true)};}}
            disabled = {currentPage <=4 }
            hidden={currentPage===6}
            className="submit_button"
            
            // className={`next ${currentPage === pages ? 'disabled' : ''}`}
          >
            Submit
          </button>
          <div>
          {
            
            flag&&<div><img className="final_score_img" src="https://media0.giphy.com/media/4EF55kelvzyMWhNTrA/200w.gif?cid=82a1493bb1rsoaid2bu3cj57bomni4dipj0apyo2ivf7sr5l&rid=200w.gif&ct=ts" alt="final_score"/> <div className="log-font total">You have scored : {score.score}</div><Link to={"/subscription"}><button  className="more_questions">Want more questions?</button></Link></div>
            
          }
          {/* <img src="https://media0.giphy.com/media/4EF55kelvzyMWhNTrA/200w.gif?cid=82a1493bb1rsoaid2bu3cj57bomni4dipj0apyo2ivf7sr5l&rid=200w.gif&ct=ts" alt="final_score"/> */}
          </div>
          {/* <button
          onClick={() => history.push('/score')}
            disabled = {currentPage != pages}
            // className={`next ${currentPage === pages ? 'disabled' : ''}`}
            >
            Submit
          </button> */}
        </div>
      </div>
    );
  }

  export default React.memo(Pagination);