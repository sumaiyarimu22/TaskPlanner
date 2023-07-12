const Footer = () => {
  return (
    <footer className="container mx-auto text-center p-10 border-t-2  border-dashed rounded-bl-lg rounded-br-lg">
      <p>&copy; {new Date().getFullYear()} TaskPlanner.All right reserved</p>
    </footer>
  );
};

export default Footer;
