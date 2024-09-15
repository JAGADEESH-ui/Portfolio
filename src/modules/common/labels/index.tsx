export default function Font_32px({
	label,
	weight = "font-normal",
	family = "font-poppins",
	color = "text-white",
}: any) {
	return (
		<text className={`${weight} ${family} ${color} text-[18px] md:text-3xl`}>
			{label}
		</text>
	);
}

export function Font_24px({
	label,
	weight = "font-normal",
	family = "font-poppins",
	color = "text-white",
}: any) {
	return (
		<text className={`${weight} ${family} ${color} text-[15px] md:text-2xl`}>
			{label}
		</text>
	);
}

export function Font_94px({
	label,
	weight = "font-normal",
	family = "font-poppins",
	align = "text-left",
	leading = "leading-none",
	color = "text-white",
}: any) {
	return (
		<text
			className={`${weight} ${family} ${align} ${leading} ${color} leading-none text-[39px] md:text-[94px] `}
		>
			{label}
		</text>
	);
}

export function Font_84px({
	label,
	weight = "font-normal",
	family = "font-poppins",
	align = "text-left",
	leading = "leading-none",
	color = "text-white",
}: any) {
	return (
		<text
			className={`${weight} ${family} ${align} ${leading} ${color} leading-none text-[23px] md:text-[84px] `}
		>
			{label}
		</text>
	);
}

export function Font_64px({
	label,
	weight = "font-normal",
	family = "font-poppins",
	align = "text-left",
	leading = "leading-none",
	color = "text-white",
}: any) {
	return (
		<text
			className={`${weight} ${family} ${align} ${leading} ${color} leading-none  text-[18px] md:text-[64px] `}
		>
			{label}
		</text>
	);
}

export function Font_140px({
	label,
	weight = "font-normal",
	family = "font-poppins",
	align = "text-left",
	leading = "leading-none",
	color = "text-white",
}: any) {
	return (
		<text
			className={`${weight} ${family} ${align} ${leading} ${color} leading-none text-[60px] md:text-[140px] transition duration-500 ease-in-out transform hover:scale-90 hover:opacity-65`}
		>
			{label}
		</text>
	);
}

export function Font_28px({
	label,
	weight = "font-normal",
	family = "font-poppins",
	align = "text-left",
	leading = "leading-none",
	color = "text-white",
}: any) {
	return (
		<text
			className={`${weight} ${family} ${align} ${leading} ${color} leading-none text-[18px] md:text-[28px] `}
		>
			{label}
		</text>
	);
}

export function Font_20px({
	label,
	weight = "font-normal",
	family = "font-poppins",
	align = "text-left",
	leading = "leading-none",
	color = "text-white",
}: any) {
	return (
		<text
			className={`${weight} ${family} ${align} ${leading} ${color} leading-none text-[12px] md:text-[20px] `}
		>
			{label}
		</text>
	);
}

export function Font_190px({
	label,
	weight = "font-normal",
	family = "font-poppins",
	align = "text-left",
	leading = "leading-none",
	color = "text-white",
}: any) {
	return (
		<text
			className={`${weight} ${family} ${align} ${leading} ${color} leading-none text-[55px] md:text-[190px] `}
		>
			{label}
		</text>
	);
}

export function Font_72px({
	label,
	weight = "font-normal",
	family = "font-poppins",
	align = "text-left",
	leading = "leading-none",
	color = "text-white",
}: any) {
	return (
		<text
			className={`${weight} ${family} ${align} ${leading} ${color} leading-none text-[32px] md:text-[72px] `}
		>
			{label}
		</text>
	);
}
