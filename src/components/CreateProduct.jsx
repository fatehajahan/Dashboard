import { Option, Select, Textarea } from '@material-tailwind/react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const CreateProduct = () => {
    const [categoryies, setCategories] = useState([])
    const [subCategoryies, setSubCategoryies] = useState([])
    const [form, setForm] = useState({
        name: "",
        description: "",
        price: "",
        fragrance: "",
        discount: "",
        category: "",
        subCategory: "",
        image: null
    })

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/category/getallcategory")
            .then((res) => setCategories(res.data.data))

    }, [])

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/subcategory/getallsubcategory")
            .then((res) => setSubCategoryies(res.data.data))
    }, [])

    // console.log(subCategoryies)
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleImageChange = (e) => {
        setForm({
            ...form,
            productImage: e.target.files[0]
        });
    };

    const handleCreateProduct = () => {
        console.log(form)

        axios.post("http://localhost:3000/api/v1/product/createproduct",)
            .then((res) => toast.success("Category Created Successfully"))
            .catch((err) => toast.error("Category Creation Failed"));
    }
    return (
        <div className='flex flex-col items-center justify-center mt-[20px]'>
            <Toaster />
            <div className=''>
                <Typography variant="h4" color="blue-gray">
                    Create Product
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to register.
                </Typography>
                <form className="">
                    <div className="mb-1 flex gap-6 justify-between">

                        <div className='mb-1 flex flex-col gap-6 '>
                            {/* name */}
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Product's Name <span className='text-red-500'>*</span>
                            </Typography>
                            <Input
                                onChange={handleChange}
                                name='ProductName'
                                label="Product's Name"
                                size="lg"
                            />

                            {/* description */}
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Product's Description <span className='text-red-500'>*</span>
                            </Typography>
                            <Textarea
                                onChange={handleChange}
                                name='description'
                                label="Product's Description"
                                size="lg"
                            />

                            {/* price */}
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Price <span className='text-red-500'>*</span>
                            </Typography>
                            <Input
                                onChange={handleChange}
                                name='price'
                                label=" Product's Price"
                                size="lg"
                            />

                            {/* Fragnance */}
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Product's Fragrance <span className='text-red-500'>*</span>
                            </Typography>
                            <Input
                                onChange={handleChange}
                                name='fragnance'
                                label=" Product's Fragnance"
                                size="lg"
                            />
                        </div>

                        <div className='mb-1 flex flex-col gap-6'>
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Product's Category <span className='text-red-500'>*</span>
                            </Typography>

                            <Select label="Select Version">
                                {
                                    categoryies.map((category, index) => (
                                        <Option key={index}>{category.categoryName}</Option>
                                    ))
                                }
                            </Select>

                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Product's Subcategory
                            </Typography>
                            <Select label="Select Version">
                                {
                                    subCategoryies.map((subcategory, index) => (
                                        <Option key={index}>{subcategory.subCategoryName}</Option>
                                    ))
                                }
                            </Select>

                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Product's Discount
                            </Typography>
                            <Input
                                onChange={handleChange}
                                name='discount'
                                label=" Product's Discount"
                                size="lg"
                            />

                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Product's Image
                            </Typography>
                            <Input
                                onChange={handleImageChange}
                                type='file'
                                name='image'
                                label=" Product's Image"
                                size="lg"
                            />
                        </div>

                    </div>


                    <Button
                        onClick={handleCreateProduct}
                        className="mt-6" fullWidth>
                        Create Product
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default CreateProduct