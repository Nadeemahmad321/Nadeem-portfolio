import React from 'react'

export default function CommandPalette({
  isCommandMenuOpen,
  setIsCommandMenuOpen,
  commandQuery,
  setCommandQuery,
  filteredCommands,
  selectedIdx,
  setSelectedIdx
}) {
  if (!isCommandMenuOpen) return null

  return (
    <div className="command-overlay" onClick={() => setIsCommandMenuOpen(false)}>
      <div className="command-dialog" onClick={e => e.stopPropagation()}>
        <div className="command-header">
          <input
            type="text"
            autoFocus
            placeholder="Type a command or navigate..."
            value={commandQuery}
            onChange={e => {
              setCommandQuery(e.target.value)
              setSelectedIdx(0)
            }}
          />
          <span className="esc-tag">ESC</span>
        </div>
        <div className="command-list">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cmd, idx) => (
              <div
                key={idx}
                className={`command-item ${idx === selectedIdx ? 'selected' : ''}`}
                onClick={() => {
                  cmd.action()
                  setIsCommandMenuOpen(false)
                }}
                onMouseEnter={() => setSelectedIdx(idx)}
              >
                <span>{cmd.label}</span>
                {cmd.shortcut && <kbd>{cmd.shortcut}</kbd>}
              </div>
            ))
          ) : (
            <div className="command-no-results">No commands found.</div>
          )}
        </div>
        <div className="command-footer">
          <span>Use <kbd>↑</kbd> <kbd>↓</kbd> to navigate, <kbd>Enter</kbd> to select.</span>
        </div>
      </div>
    </div>
  )
}
