import { Textarea } from '@material-tailwind/react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import React, { useState } from 'react'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const CreateCategory = () => {
    const [categoryName, setCategoryName] = useState("")
    const [categoryDescription, setCategoryDescription] = useState("")

    const handleCreateCategory = () => {
        console.log(categoryName)
        console.log(categoryDescription)
        setCategoryDescription("")
        setCategoryName("")
        const data = {
            categoryName,
            categoryDescription
        };
        axios.post("http://localhost:3000/api/v1/category/createcategory", data)
            .then((res) => toast.success("Category Created Successfully"))
            .catch((err) => toast.error("Category Creation Failed"));
    }
    return (
        <div className='flex flex-col items-center justify-center mt-[50px]'>
            <Toaster />
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Create Category
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to register.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Category's Name
                        </Typography>
                        <Input
                            onChange={(e) => setCategoryName(e.target.value)}
                            name='categoryName'
                            label=" Category's Name"
                            size="lg"
                        />

                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Category's Description
                        </Typography>
                        <Textarea
                            onChange={(e) => setCategoryDescription(e.target.value)}
                            label="Category's Descrioption"
                            size="lg"
                        />

                    </div>

                    <Button onClick={handleCreateCategory} className="mt-6" fullWidth>
                        Create Category
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Already have an account?{" "}
                        <a href="#" className="font-medium text-gray-900">
                            Sign In
                        </a>
                    </Typography>
                </form>
            </Card>
        </div>
    )
}

export default CreateCategory