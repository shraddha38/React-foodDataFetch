import React, { useEffect, useState } from "react";
import axios from "axios";
import $ from 'jquery';
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-dt/js/dataTables.dataTables"
import 'jquery/dist/jquery.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

export default function Consume() {
  const [meal, setmeal] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        console.log(res.data);
        setmeal(res.data.categories)
      })
      .catch((err) => {
        console.log(err);

    });
    $(function (){
        $('#mytable').dataTable()
    })

  }, []);

console.log("meal=",meal)



  return (
    <div className="row">
    {meal.map((obj)=>{
        return (
          
            <div className="col-sm-3">
            <div className="card mt-4">
                <img className="card-img-top" src={obj.strCategoryThumb} />

                <div className="card-body">
                <h5 class="card-title">Type{obj.strCategory}</h5>
                
                <p>{obj.strCategoryDescription}</p> 
                </div>
        
            </div>
            </div>
        )
    })}
</div>

    
  );
}
