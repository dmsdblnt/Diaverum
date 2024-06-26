import React, {useState} from "react";
import {FileDropper} from "./FileDropper";
import styled from "styled-components";
import {Table} from "./Table/Table";

export function App() {
	const [headers, setHeaders] = useState<string[]>([]);
	const [rows, setRows] = useState<string[][]>([]);

	return (
		<AppStyled>
			<FileDropper
				setHeaders={setHeaders}
				setTableRows={setRows}
			/>
			<Table
				headers={headers}
				rows={rows}
			/>
		</AppStyled>
	);
}

const AppStyled = styled.div`
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	font-size: calc(10px + 2vmin);
	color: white;
	text-align: center;
`;
