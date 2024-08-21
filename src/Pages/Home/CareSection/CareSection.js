import React from 'react';
import treatment from "../../../assets/images/treatment.png"
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const CareSection = () => {
    return (
        <div className="card card-side bg-base-100 lg:h-4/6 my-24 shadow-xl grid lg:grid-cols-2 lg:w-9/12 mx-auto">
            <figure><img src={treatment} alt="Movie" /></figure>
            <div className="card-body flex flex-col justify-center items-center">
                <h2 className="card-title">Exceptional Dental Care, <br /> on Your Terms</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton></PrimaryButton>
            </div>
        </div>
    );
};

export default CareSection;