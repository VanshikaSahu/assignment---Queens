import React, {useState} from 'react';

const AddMovies = (props) =>{
    const[title, setTitle] = useState();
    const[release_date, setRelease_date] = useState();
    const[info,setInfo] = useState();
    const[title1, setTitle1] = useState();
    const[release_date1, setRelease_date1] = useState();
    const[info1,setInfo1] = useState();
    

    const movie = {
        title: title1,
        release_date: release_date1,
        info: info1

    }
    const Upload = () => {
        setTitle1(title);
        setRelease_date1(release_date);
        setInfo1(info);

    }
    props.onAddmovie(movie);//sending data to index.js using props. 
    const Change1 =(e)=>{
        setTitle(e.target.value);
    }
    const Change2 =(e)=>{
        setRelease_date(e.target.value);
    }
    const Change3 =(e)=>{
        setInfo(e.target.value);
    }
    return(
        <form>
            <div>
                <label htmlFor = "title">Title:</label>
                <br/>
                <input type = 'text' id ='title' onChange = {Change1} ></input>
                <br/>
                <label htmlFor = "release_date">Release Date:</label>
                <br/>
                <input type = 'text' id ='release_date' onChange = {Change2} ></input>
                <br/>
                <label htmlFor = "info">Info:</label>
                <br/>
                <input type = 'text' id ='info' onChange = {Change3} ></input>
                <br/>
                <button onClick ={Upload}>Submit</button>
                
            </div>
        </form>
    )
}
export default AddMovies;