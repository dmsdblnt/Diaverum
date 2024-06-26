import styled from "styled-components";
import {TableHeader} from "./TableHeader";
import {TableRow} from "./TableRow";

interface ITableProps {
	headers: string[];
	rows: string[][];
}

export const Table = ({headers, rows}: ITableProps) => {
	return (
		<TableStyled>
			<TableHeader headers={headers}></TableHeader>
			{rows.map((row, index) => {
				return (
					<TableRow
						key={`${row}_${index}`}
						row={row}
					/>
				);
			})}
		</TableStyled>
	);
};

const TableStyled = styled.div`
	width: 90vw;
	height: 500px;
	overflow-x: scroll;
`;
