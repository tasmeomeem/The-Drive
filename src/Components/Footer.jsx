import { BsFacebook, } from 'react-icons/Bs';
import { FaYoutube } from 'react-icons/fa';
// import { MdAttachEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <div className="container mx-auto pb-20 mb-10 bg-cyan-100 mt-10 flex flex-col sm:flex-row md:flex-row lg:flex-row gap-4">
        <h1 className='text-6xl text-cyan-600 font-bold'>Footer</h1>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
            <p className="pt-4 px-4 text-cyan-600">
            The Drive is the leading search car<br />
            venture in Bangladesh, that helps users <br />
            buy cars that are right for them.
            </p>

            <p className="flex gap-3 text-xl pt-2 px-4 text-cyan-600">
            <BsFacebook />
            <FaYoutube />
            </p>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4">
            <h1 className="text-xl text-cyan-600 font-bold pt-4">SERVICES</h1>
            <h1 className="text-cyan-600">Parts</h1>
            <h1 className="text-cyan-600">New Model Cars</h1>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4">
            <h1 className="text-xl text-cyan-600 font-bold pt-4">MORE</h1>
            <h1 className="text-cyan-600">Car Compare</h1>
            <h1 className="text-cyan-600">Review</h1>
            <h1 className="text-cyan-600">Warranties & The Drive</h1>
        </div>
</div>


    );
};

export default Footer;