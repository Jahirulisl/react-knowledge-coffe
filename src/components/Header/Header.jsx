import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 m-8 border-b-2'>
             <h1 className="text-4xl font-bold">knowledge Cafe</h1>
             <img src={profile} alt="" />
       
        </header>
    );
};

export default Header;
