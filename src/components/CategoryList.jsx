import React, { useEffect, useState } from 'react'
import { Button, Card, Popover, PopoverContent, PopoverHandler, Typography } from "@material-tailwind/react";
import axios from 'axios';
import { Link } from 'react-router';
import toast from 'react-hot-toast';

const CategoryList = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/category/getallcategory")
            .then((res) => setCategories(res.data.data))
    }, [])
    console.log(categories)
    const TABLE_HEAD = ["Sr No", "Category Name", "Category Description", "Update", "Delete"];

    const TABLE_ROWS = categories

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/api/v1/category/deletecategory/${id}`)
            .then((res) => {
                console.log(res.data)
                setCategories(categories.filter((category) => category._id !== id))
                toast.success("Category Deleted Successfully")
            })
    }
    return (
        <div>
            <Typography
                variant="small"
                color="blue-gray"
                className="leading-none opacity-70 text-center text-[50px] font-bold"
            >
                Categoy List
            </Typography>


            <Card className="h-full w-[1000px] mx-auto overflow-hidden">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70 text-center"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(({ _id, categoryName, categoryDescription }, index) => (
                            <tr key={categoryName} className="even:bg-blue-gray-50/50 text-center">
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {index + 1}.
                                    </Typography>
                                </td>

                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {categoryName}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {categoryDescription}
                                    </Typography>
                                </td>

                                <td className="p-4">
                                    <Link to={`/updateCategory/${_id}`}>
                                        <Typography
                                            as="span"
                                            variant="small"
                                            color="blue-gray"
                                            className="font-medium bg-green-400 text-white hover:bg-green-900 transition duration-500 px-2 py-3 rounded-md"
                                        >
                                            Update
                                        </Typography>
                                    </Link>
                                </td>

                                <td className="p-4">
                                    <Popover>
                                        <PopoverHandler>
                                            <Button className='font-medium bg-red-400 text-white hover:bg-red-900 transition duration-500  py-3 text-center rounded-md'>Delete</Button>
                                        </PopoverHandler>
                                        <PopoverContent>
                                            <div>
                                                <p>Are you sure you want to delete this category?</p>
                                                <div className='flex justify-center mt-4'>
                                                    <Button onClick={() => handleDelete(_id)} className='bg-red-400 text-white hover:bg-red-900 transition duration-500  py-3 text-center rounded-md' >Delete</Button>
                                                </div>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </div>
    )
}

export default CategoryList 