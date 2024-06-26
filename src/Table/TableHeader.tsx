import styled from "styled-components";
import {CENTERED, ELLIPSIS} from "../styles";
import {useState} from "react";

interface ITableHeaderProps {
	headers: string[];
}

export const TableHeader = ({headers}: ITableHeaderProps) => {
	const [popupContent, setPopupContent] = useState<string>("");
	const [popupTranslate, setPopupTranslate] = useState<string>("");

	const onHover = (e: React.MouseEvent, index: number) => {
		const div = e.currentTarget;

		if (div.scrollWidth > div.clientWidth) {
			const divBB = div.getBoundingClientRect();

			setPopupContent(headers[index]);
			setPopupTranslate(`translate(${(divBB.right + divBB.left) / 2}px, ${(divBB.top + divBB.bottom) / 2 - 20}px)`);
		}
	};

	const onMouseLeave = () => {
		setPopupContent("");
	};

	return (
		<TableHeaderStyled>
			{headers.map((header, index) => {
				return (
					<HeaderCellStyled
						key={`${header}_${index}`}
						onMouseOver={(e) => onHover(e, index)}
						onMouseLeave={onMouseLeave}
					>
						{header}
					</HeaderCellStyled>
				);
			})}
			{popupContent && <PopupStyled $translate={popupTranslate}>{popupContent}</PopupStyled>}
		</TableHeaderStyled>
	);
};

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

const TableHeaderStyled = styled.div`
	display: flex;
	flex-direction: row;

	:first-child {
		border-radius: 4px 0 0 0;
		border-left: 2px solid gray;
	}

	:last-child {
		&${HeaderCellStyled} {
			border-radius: 0 4px 0 0;
			border-right: 2px solid gray;
		}
	}
`;

const PopupStyled = styled.div<{$translate: string}>`
	position: absolute;
	left: 0;
	top: 0;
	background-color: black;
	transform: ${(props) => props.$translate ?? ""};
	border-radius: 4px;
	width: 200px;
	height: 40px;
	font-size: 14px;
	border-right: none;
	${CENTERED}
`;
