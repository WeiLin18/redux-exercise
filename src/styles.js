import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
button{
	border: none;
	&:focus{
		outline:none;
	}
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
textarea:focus, input:focus{
    outline: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

.d-inbl{
	display:inline-block;
}

.d-flex{
	display: flex;
}

.justify-content-between{
	justify-content: space-between;
}

.po-re{
	position: relative;
}

.mr-2{
	margin-right: 8px;
}
.mb-2{
	margin-bottom: 8px;
}

.font-sm{
	font-size: 14px;
}
`;

export default GlobalStyle;
