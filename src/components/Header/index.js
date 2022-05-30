import './Header.scss';
const Header = () => {
  return (
    <div className="header">
      <p>
        Generate groups with a minimum number of repeat group compositions. Grouper identifies the
        number of times each pair of individuals has been grouped together, and attempts to create
        groups with the lowest number of previously paired individuals.
      </p>
      <p>
        Rerun until you find an acceptable group. Save to memory so future groups won&apos;t have
        the same makeup.
      </p>
    </div>
  );
};

export default Header;
