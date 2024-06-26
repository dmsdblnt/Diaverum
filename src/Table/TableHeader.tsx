import styled from "styled-components";
import {ELLIPSIS} from "../styles";

interface ITableHeaderProps {
	headers: string[];
}

export const TableHeader = ({headers}: ITableHeaderProps) => {
	const onHover = (e: React.MouseEvent) => {
		const div = e.currentTarget;

		if (div.scrollWidth > div.clientWidth) {
		}
	};

	return (
		<TableHeaderStyled>
			{headers.map((header, index) => {
				return <HeaderCellStyled key={`${header}_${index}`} onMouseOver={onHover}>{header}</HeaderCellStyled>;
			})}
		</TableHeaderStyled>
	);
};

const TableHeaderStyled = styled.div`
	display: flex;
	flex-direction: row;

	:first-child {
		border-radius: 4px 0 0 0;
		border-left: 2px solid gray;
	}

	:last-child {
		border-radius: 0 4px 0 0;
		border-right: 2px solid gray;
	}
`;

export const HeaderCellStyled = styled.div`
	border: 1px solid gray;
	border-bottom: 2px solid gray;
	border-top: 2px solid gray;
	border-right: none;
	color: gray;
	font-size: 16px;
	font-weight: 600;
	min-width: 120px;
	max-width: 120px;
	height: 22px;
	text-align: left;
	padding-left: 4px;
	${ELLIPSIS}
`;
