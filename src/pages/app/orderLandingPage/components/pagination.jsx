// pagination qulda yasash commetdagilar pagination chaqirilgan companentga yoziladi
// const [currentPage, setCurrentPage] = useState(1);
// const [usersPerPage] = useState(6)
// const indexOfLastUser = currentPage * usersPerPage;
// const indexOfFirstUser = indexOfLastUser - usersPerPage;
// const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
// const totalPages = Math.ceil(users.length / usersPerPage);
// const paginate = pageNumber => setCurrentPage(pageNumber);

const Pagination = ({ currentPage, totalPages, paginate }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex justify-center mt-4">
            <button
                className="w-12 h-12 text-[2rem] -mt-[.225rem] rounded-full text-orange-400 hover:text-orange-500 disabled:text-gray-400 duration-300"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
            >«</button>
            {pageNumbers.map(number => (
                <button
                    key={number}
                    className={`w-12 h-12 mx-3 rounded-full ${currentPage === number ? 'bg-orange-500 text-white shadow-orange-300' : 'bg-[#F1E8D7]'} 
                    hover:bg-orange-400 hover:text-white duration-300 shadow-md shadow-[#F1E8D7] text-[1.2rem] font-bold`}
                    onClick={() => paginate(number)}
                >{number}</button>
            ))}
            <button
                className="w-12 h-12 text-[2rem] -mt-[.225rem] rounded-full text-orange-400 hover:text-orange-500 disabled:text-gray-400 duration-300"
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
            >»</button>
        </div>
    );
}

export default Pagination;
