import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const PhoneBar = () => {

    const [Phones,setPhones] = useState([]);
    useEffect( () =>{

        // fetch('https://openapi.programming-hero.com/api/phones?search=${searchText}')
        // .then( res => res.json)
        // .then( data =>setPhones(data) )
axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
.then(data => {

    const loadData = data.data.data;
    console.log(loadData)
    const phoneData=loadData.map(phone=>{
const parts =phone.slug.split('-')
const price = parseInt(parts[1])
const phoneInfo = {

name:phone.phone_name,
price:price

}

return phoneInfo;

    })

setPhones(phoneData)
})


    },[])
    return (
        <div>
            <BarChart height={1000} width={500} data={Phones} >
                <Bar dataKey="price" fill='#8884d8' >  </Bar>
                <XAxis dataKey="name"  > </XAxis>
                <YAxis> </YAxis>
                
                
                   </BarChart>


        </div>
    );
};

export default PhoneBar;