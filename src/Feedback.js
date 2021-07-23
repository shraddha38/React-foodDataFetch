import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import swal from 'sweetalert';

export default function FeedBack(){

    const [username,setusername]=useState('')
    const [contact,setcontact]=useState('')
    const [feedback,setfeedback]=useState('')
    const [allfeedbacks,setallFeedBacks]=useState([])

    function submitFeedBack(event){
        event.preventDefault();

        var all = [...allfeedbacks]
        var currFeed = {name:username,contact:contact,feedback:feedback}
        all.push(currFeed)
        setallFeedBacks(all)
        swal('Thank You!','Your Review has been submitted Successfully! ','success')

    }

    function reset(){
        setusername('')
        setcontact('')
        setfeedback('')
    }

    const feed = allfeedbacks.map((fed,index)=>{
        return(
        <tr>
            <td>{index+1}</td>
            <td>{fed.name}</td>
            <td>{fed.contact}</td>
            <td>{fed.feedback}</td>
        </tr>
    )})


    





    return(
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-6 ">
            <h2>FeedBack</h2>    
            <input type="text" placeholder="Name" className='form-control' value={username} onChange={(e)=>{setusername(e.target.value)}}/>
            <input type="text" placeholder="Contact" className='form-control' value={contact} onChange={(e)=>{setcontact(e.target.value)}}/>
            <input type="textarea" placeholder="FeedBack" className='form-control' value={feedback} onChange={(e)=>{setfeedback(e.target.value)}}/>
     
            <button className="btn btn-success" onClick={submitFeedBack}>Submit</button>
            <button className="btn btn-neutral" onClick={reset}>Reset</button>
            </div>
        
            <div className="col-md-10">
                <h3>Read what People Says!</h3>
                <table className="table  table-stripped table-dark table-bordered table-hover">
                    <thead className="thead">
                        <tr>
                            <th>Sr.no.</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>FeedBack</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feed}
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    )
}