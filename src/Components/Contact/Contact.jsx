

const Contact = () => {
    return (
        <div className="w-11/12 ">
            <div className="text-center mt-10 text-6xl ">
                <h2 className="">Contact Us</h2>
            </div>
            <div className="flex justify-around mt-12 items-center">
                <div>
                    <img className="w-96 mx-auto" src={'https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1699178895~exp=1699179495~hmac=d32538f97107f1928858606f2b70981890b3b050e87afe8b295b6afe86164f5c'} alt="" />
                </div>
                <div className="max-w-xs text-center">
                    <h2 className="font-bold mb-12">Contact Details</h2>
                    <p><span className="font-bold">Address:</span> <br /> Abanti, Suite#A-3, H#37, R#27, Blk#A, Banani, Dhaka-1213.</p>
                    <br />
                    <p><span className="font-bold">Phone:</span> <br /> +8801711-527601, +8801712-045600 +8801618-500425, +8801716-754600</p>
                    <br />
                    <p><span className="font-bold">Enail: </span> <br />emeisltd@gmail.com engr.enam64@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;