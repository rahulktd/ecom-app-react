import React,{useState,useEffect} from 'react'
import './Home.css'
import { getAllProducts } from '../../ApiService/api'

function Home() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async ()=>{
            const data = await getAllProducts();
            
            setProducts(data)
        }

        fetchProducts()
      
    }, [])
    
  return (
    <div className='product-grid'>

        

        <div className="product">

            <img src="" alt="alternative" />

            <h2>Sample</h2>

            <p>
                <span className='price'>10</span>
            </p>

            <button>Product details</button>


        </div>


    </div>
  )
}

export default Home