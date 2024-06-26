import styled from "styled-components";
import {HeaderCellStyled} from "./TableHeader";
import {ELLIPSIS} from "../styles";

interface ITableRowProps {
	row: string[];
}

export const TableRow = ({row}: ITableRowProps) => {
	return (
		<TableRowStyled>
			{row.map((cell) => {
				return <TableCellStyled>{cell}</TableCellStyled>;
			})}
		</TableRowStyled>
	);
};

const TableCellStyled = styled(HeaderCellStyled)`
	font-size: 14px;
	font-weight: 400;
	display: flex;
	align-items: center;
	border-top: none;
	border-bottom: 1px solid gray;
`;

const TableRowStyled = styled.div`
	height: 22px;
	display: flex;

	&:first-child {
		border-top: 1px solid gray;
	}

	&:last-child {
		${TableCellStyled} {
			border-bottom: 2px solid gray;
		}

		:first-child {
			border-radius: 0 0 0 4px;
		}

		:last-child {
			border-radius: 0 0 4px 0;
		}
	}

	:first-child {
		border-left: 2px solid gray;
	}

	:last-child {
		border-right: 2px solid gray;
	}
`;
