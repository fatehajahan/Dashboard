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

const UpdateCategory = () => {
  const [newCategoryName, setNewCategoryName] = useState("")
  const [newCategoryDescription, setNewCategoryDescription] = useState("")

  const handleCreateCategory = () => {
    console.log(newCategoryName)
    console.log(newCategoryDescription)
    setNewCategoryDescription("")
    setNewCategoryName("")
    const data = {
      newCategoryName: newCategoryName,
      newCategoryDescription: newCategoryDescription
    };
    axios.post("http://localhost:3000/api/v1/category/updatesinglecategory/:id", data)
      .then((res) => toast.success("Category Updated Successfully"))
      .catch((err) => toast.error("Failed to Update a Category"));
  }
  return (
    <div>
      <div className='flex flex-col items-center justify-center mt-[50px]'>
        <Toaster />
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Update Category
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to register.
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                New Category's Name
              </Typography>
              <Input
                onChange={(e) => setNewCategoryName(e.target.value)}
                name='categoryName'
                label=" Category's New Name"
                size="lg"
              />

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                New Category's Description
              </Typography>
              <Textarea
                onChange={(e) => setNewCategoryDescription(e.target.value)}
                label="Category's New Description"
                size="lg"
              />

            </div>

            <Button onClick={handleCreateCategory} className="mt-6" fullWidth>
              Update Category
            </Button>
            
          </form>
        </Card>
      </div>
    </div>
  )
}

export default UpdateCategory