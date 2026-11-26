/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  const gameUrl = `${import.meta.env.BASE_URL}game.html`;

  return (
    <div className="w-screen h-screen bg-[#13202b] overflow-hidden">
      <iframe
        src={gameUrl}
        title="Siêu Thám Tử"
        className="w-full h-full border-0 block"
      />
    </div>
  );
}
