import React, { useEffect, useState } from 'react'
import { Card, Typography } from "@material-tailwind/react";
import axios from 'axios';
import { Link } from 'react-router';


const CategoryList = () => {
    const [categoryies, setCategories] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/category/getallcategory")
            .then((res) => setCategories(res.data.data))
    }, [])
    console.log(categoryies)
    const TABLE_HEAD = ["Sr No", "Categor Name", "Category Description", "Update", "Delete"];

    const TABLE_ROWS = categoryies

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

                                <Link to={`/updateCategory/${_id}`}>
                                    <td className="p-4">
                                        <Typography as="a" variant="small" color="blue-gray" className="font-medium bg-green-400 text-white hover:bg-green-900 transition duration-500 px-2 py-3 rounded-md">
                                            Update
                                        </Typography>
                                    </td>
                                </Link>

                                <td className="p-4">
                                    <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium bg-red-400 text-white hover:bg-red-900 transition duration-500  py-3 text-center rounded-md">
                                        Delete
                                    </Typography>
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