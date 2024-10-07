import React, {useState,useEffect} from 'react'

const WeatherInfo = () => {
  const [weatherInfo,setWeatherInfo] = useState(null)
  const [city,setCity] = useState('')
  const [error,setError] = useState(null)
  const [loading, setLoading] = useState(false);

//   useEffect(()=>{
//        fetchApiData()
//   },[])

  const fetchApiData = async () =>{
       if(city.trim() === '')
       {
          setError("Please Enter City Name")
          setWeatherInfo(null)
          return
       } 

       setLoading(true);
       setError(null); 
   
            try{
                const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=8945c58993144f519cf82700240504&q=${city}&aqi=no`);
                if(!response.ok){
                    throw new Error("Network response was not ok")
                }
                const jsonData = await response.json();
                console.log('jsonData',jsonData)
                setWeatherInfo(jsonData)
                setError(null)
            }
            catch(error){
                console.log('Error while Fetching Data', error)
                setError('Failed to fetch weatherdata. Please try again later')
                setWeatherInfo(null)
            } finally{
              setLoading(false)
            }
  }  

  return (
    <div className='container-fluid' style={{margin:'20px'}}>
         <input
             type='text'
             value={city}
             placeholder='Enter City Name'
             onChange={(e)=>setCity(e.target.value)}
         />

         <button onClick={fetchApiData}>{loading ? 'Fetching...' : 'Fetch Data'}</button>

         {
            error && 
              <p className='error'>{error}</p>
         }
         {
            weatherInfo && (
                <div>
                    <h2>Weather in {weatherInfo.location.name},{weatherInfo.location.country}</h2>
                    <p>Temperature : {weatherInfo.current.temp_c} degress</p>
                    <p>Humidity : {weatherInfo.current.humidity}</p>
                    <p>Wind Speed : {weatherInfo.current.wind_kph}</p>
                </div>    
            )
         }

    </div>
  )
}

export default WeatherInfo
