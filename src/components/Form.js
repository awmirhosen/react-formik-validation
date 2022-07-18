import React from "react";
import './form.css'
import {useFormik} from "formik";
import * as Yup from 'yup'

const validationSchema = Yup.object({
    firstName : Yup.string().required('This Field is Required'),
    lastName : Yup.string().required('This Field is Required'),
    address : Yup.string().required('This Field is Required'),
    email : Yup.string().required('This Field is Required').email('Email Format is not Valid'),
    country : Yup.string().required('This Field is Required'),
    city : Yup.string().required('This Field is Required'),
    username: Yup.string().required('This Field is Required').matches(
        /^[a-z0-9_.]+$/,
        "Invalid character"
    ),
})

const Form = () => {

    const Formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            country: '',
            city: '',
            username: '',
        },
        validationSchema
    })


    return (
        <div className="gradient-border" id="box" >
            <h1 className='text-center mb-5 text-4xl'>Enter Your Information</h1>
            <div className='flex justify-center w-full py-5 px-10'>
             <form action="#" className='w-full p-5 '>
                 <div className='flex flex-col md:flex-row w-12/12 mt-5'>
                     <div className='text-box'>
                         <label className='mb-1 ml-5 text-xl' />
                         <div className='w-12/12 flex justify-center'>
                             <input type="text" className="rounded text-xl" placeholder=' Firstname' name='firstName'
                                    {...Formik.getFieldProps('firstName')}
                             />
                         </div>
                         {Formik.errors.firstName && Formik.touched.firstName ?
                             <small className='text-red-500'>
                                 {Formik.errors.firstName}
                             </small> : null
                         }
                     </div>
                     <div className='text-box'>
                         <label className='mb-1 ml-5 text-xl' />
                         <div className='w-12/12 flex justify-center'>
                             <input type="text" className="rounded text-xl" placeholder=' Lastname' name='lastName'
                                    {...Formik.getFieldProps('lastName')}
                             />
                         </div>
                         {Formik.errors.lastName && Formik.touched.lastName ?
                             <small className='text-red-500'>
                                 {Formik.errors.lastName}
                             </small> : null
                         }
                     </div>
                 </div>
                {/***************************************/}
                 <div className='flex flex-col md:flex-row w-12/12 mt-5'>
                     <div className='text-box'>
                         <label className='mb-1 ml-5 text-xl' />
                         <div className='w-12/12 flex justify-center'>
                             <input type="text" className="rounded text-xl" placeholder=' Address'
                                    {...Formik.getFieldProps('address')}
                             />
                         </div>
                         {Formik.errors.address && Formik.touched.address ?
                             <small className='text-red-500'>
                                 {Formik.errors.address}
                             </small> : null
                         }
                     </div>
                 </div>
                {/***************************************/}
                 <div className='flex flex-col md:flex-row w-12/12 mt-5'>
                     <div className='text-box'>
                         <label className='mb-1 ml-5 text-xl' />
                         <div className='w-12/12 flex justify-center'>
                             <input type="text" className="rounded text-xl" placeholder=' Email'
                                    {...Formik.getFieldProps('email')}
                             />
                         </div>
                         {Formik.errors.email && Formik.touched.email ?
                             <small className='text-red-500'>
                                 {Formik.errors.email}
                             </small> : null
                         }
                     </div>
                 </div>
                {/***************************************/}
                 <div className='flex flex-col md:flex-row w-12/12 mt-5'>
                     <div className='text-box'>
                         <label className='mb-1 ml-5 text-xl' />
                         <div className='w-12/12 flex justify-center'>
                             <input type="text" className="rounded text-xl" placeholder=' Country'
                                    {...Formik.getFieldProps('country')}
                             />
                         </div>
                         {Formik.errors.country && Formik.touched.country ?
                             <small className='text-red-500'>
                                 {Formik.errors.country}
                             </small> : null
                         }
                     </div>
                     <div className='text-box'>
                         <label className='mb-1 ml-5 text-xl' />
                         <div className='w-12/12 flex justify-center'>
                             <input type="text" className="rounded text-xl" placeholder=' City'
                                    {...Formik.getFieldProps('city')}
                             />
                         </div>
                         {Formik.errors.city && Formik.touched.city ?
                             <small className='text-red-500'>
                                 {Formik.errors.city}
                             </small> : null
                         }
                     </div>
                 </div>
                {/***************************************/}
                <div className='flex flex-col md:flex-row w-12/12 mt-5'>
                    <div className='text-box'>
                        <label className='mb-1 ml-5 text-xl' />
                        <div className='w-12/12 flex justify-center'>
                            <input type="text" className="rounded text-xl" placeholder=' Username'
                                   {...Formik.getFieldProps('username')}
                            />
                        </div>
                        {Formik.errors.username && Formik.touched.username ?
                            <small className='text-red-500'>
                                {Formik.errors.username}
                            </small> : null
                        }
                    </div>
                </div>
                 {/*submit*/}
                 <div className='w-12/12 text-center mt-5'>
                     <button type='button' className="submit mt-5">Submit</button>
                 </div>
               </form>
            </div>
        </div>
    )
}
export default Form;