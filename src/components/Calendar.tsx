import ScrollFadeIn from './common/ScrollFadeIn';

const WEEKS = [
	['', '', '', '', '', '', '1'],
	['2', '3', '4', '5', '6', '7', '8'],
	['9', '10', '11', '12', '13', '14', '15'],
	['16', '17', '18', '19', '20', '21', '22'],
	['23', '24', '25', '26', '27', '28', '29'],
	['30', '', '', '', '', '', ''],
];

export default function Calendar() {
	return (
		<ScrollFadeIn>
			<div className='flex flex-col items-center w-full px-7'>
				<p className="mb-2 text-lg font-semibold text-black">
					2025년 9월 13일 토요일 오후 12시 30분
				</p>
				<p className="mb-10 text-medium">
					더채플 앳 논현 5층 라메르홀
				</p>
				<table className="table-fixed">
					<thead>
						<tr className="font-semibold text-m">
							<th className="text-purple-400">일</th>
							<th>월</th>
							<th>화</th>
							<th>수</th>
							<th>목</th>
							<th>금</th>
							<th>토</th>
						</tr>
					</thead>
					<tbody className="text-base">
						{WEEKS.map((week, rowIdx) => (
							<tr key={rowIdx}>
								{week.map((day, colIdx) => {
									const isTargetDay = day === '13';

									return (
										<td key={colIdx} className="text-center h-17 w-14">
											{isTargetDay ? (
												<div className='relative'>
													<div className="flex items-center justify-center w-10 h-10 mx-auto text-white bg-purple-300 rounded-full">
														{day}
													</div>
													<div className="absolute text-xs text-purple-500 top-11">
														<p>오후</p>
														<p>12시 30분</p>
													</div>
												</div>
											) : (
												<span className={colIdx === 0 ? 'text-purple-400' : ''}>{day}</span>
											)}
										</td>
									);
								})}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</ScrollFadeIn>
	);
}