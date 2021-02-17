import { useMemo } from 'react';
import { useSelector } from 'react-redux';

const useTableData = () => {
  const { users } = useSelector((state) => state.users);

  const data = useMemo(
    () =>
      users.map((user) => ({
        firstName: user.name.first,
        lastName: user.name.last,
        email: user.email,
        picture: user.picture.large,
        street: user.location.street.name,
        city: user.location.city,
        country: user.location.country,
      })),
    [users]
  );

  const columns = useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
    ],
    []
  );

  return { data, columns };
};

export default useTableData;
