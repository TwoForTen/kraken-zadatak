import { useMemo, useState, useEffect } from 'react';
import { useTable, usePagination } from 'react-table';
import { useSelector, useDispatch } from 'react-redux';
import styles from './table.module.scss';

import { fetchUsers } from '../../store/Users/actions';
import { openModal } from '../../store/Modal/actions';

const Table = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.users);
  const [page, setPage] = useState(1);
  const [results, setResults] = useState(10);

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

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
  } = useTable({ columns, data }, usePagination);

  useEffect(() => {
    dispatch(fetchUsers(page, results));
  }, [page, results, dispatch]);

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                onClick={() => dispatch(openModal(row.original))}
              >
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.pagination}>
        <button onClick={() => setPage(1)} disabled={page <= 1}>
          {'<<'}
        </button>
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page <= 1}
        >
          {'<'}
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage((prev) => prev + 1)}>{'>'}</button>
        <select
          value={results}
          onChange={(e) => {
            setResults(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Table;
