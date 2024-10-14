import { useState } from "react";

export default function Index() {
	const [count, setCount] = useState(0);
	return (
		<>
			<div>
				<div>count: {count}</div>
				<button
					className="border rounded-md px-2"
					onClick={() => setCount((prev) => prev + 1)}
				>
					increment
				</button>
			</div>

			<script
				dangerouslySetInnerHTML={{
					__html:
						'alert("This script should not run because it has no nonce set.")',
				}}
			/>
		</>
	);
}
