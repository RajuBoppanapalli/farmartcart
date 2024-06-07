import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form"

import { Check2Circle } from "react-bootstrap-icons";
export function AddProduct(){
    const [productimage, setproductimage] = useState();
    const [addproduct, setaddproduct] = useState(false);

    const {
        register,
        handleSubmit
    } = useForm();

    async function saveData(data) {
        const formData = new FormData();
        formData.append('product_name', data.product_name);
        formData.append('product_brand', data.product_brand);
        formData.append('newprice', data.newprice);
        formData.append('oldprice', data.oldprice);
        formData.append('available', data.available);
        formData.append('categories', data.categories);
        formData.append('soldby', data.soldby);
        formData.append('sku', data.sku);
        formData.append('offer_percent', data.offer_percent);
        formData.append('quantity', data.quantity);
        formData.append('product_type', data.product_type);
        formData.append('product_release', data.product_release);
        formData.append('product_image', productimage); 
    
        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        };
    
        try {
            const res = await axios.post("http://localhost:4002/add-product", formData, config);
            if (res.status === 200) {
                setaddproduct(true);
                setTimeout(() => {
                    setaddproduct(false);
                }, 3000);
            }
        } catch (error) {
            console.error("Error adding product:", error);
        }
    }
    function loadImage(event) {
        var reader = new FileReader();
        reader.onload = function () {
            setproductimage(reader.result)
        }
        reader.readAsDataURL(event.target.files[0]);
    }

    
    
    return(
        <>
          <form onSubmit={handleSubmit((data) => { saveData(data) })}>
         
            <div>
                <label >Product Name:</label>
                <input
                    type="text"
                    id="productName"
                    name="product_name"
                    {...register('product_name')}
                    required
                />
            </div>
            <div>
                <label >Product Brand:</label>
                <input
                    type="text"
                    id="productBrand"
                    name="product_brand"
                    {...register('product_brand')}
                    required
                />
            </div>
            <div>
                <label >New Price:</label>
                <input
                    type="number"
                    id="newPrice"
                    name="newprice"
                    {...register('newprice')}
                  
                    required
                />
            </div>
            <div>
                <label htmlFor="oldPrice">Old Price:</label>
                <input
                    type="number"
                    id="oldPrice"
                    name="oldprice"
                    {...register('oldprice')}
                   
                />
            </div>
            <div>
                <label >Available:</label>
                <input
                    type="number"
                    id="available"
                    name="available"
                    {...register('available')}
                   
                />
            </div>
            <div>
                <label >Categories:</label>
                <input
                    type="text"
                    id="categories"
                    name="categories"
                    {...register('categories')}
                    required
                />
            </div>
            <div>
                <label>soldby:</label>
                <input
                    type="text"
                    id="categories"
                    name="soldby"
                    {...register('soldby')}
                    required
                />
            </div>
            <div>
                <label >SKU:</label>
                <input
                    type="text"
                    id="sku"
                    name="sku"
                    {...register('sku')}
                    
                />
            </div>
            <div>
                <label >Offer Percent:</label>
                <input
                    type="number"
                    id="offerPercent"
                    name="offer_percent"
                    {...register('offer_percent')}
                  
                />
            </div>
           
            <div>
                <label htmlFor="productImage">Product Image:</label>
                <input
                    type="file"
                    id="productImage"
                    name="product_image"
                    {...register('product_image')} onChange={(event) => { loadImage(event) }}
                    required
                />
            </div>
            <div>
                <label htmlFor="productType">Product Type:</label>
                <input
                    type="text"
                    id="productType"
                    name="product_type"
                    {...register('product_type')}
                    
                />
            </div>
            <div>
                <label htmlFor="productRelease">Product Release Date:</label>
                <input
                    type="text"
                    id="productRelease"
                    name="product_release"
                    {...register('product_release')}
                   
                />
            </div>
            <button type="submit" onClick={() => { setaddproduct(true) }}>Add Product</button>
        </form>
        {

addproduct && <label className="wishlis-pop"><Check2Circle></Check2Circle>Added Successfully</label>
}
        </>
    );
}