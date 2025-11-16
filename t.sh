#!/bin/bash

# Find the project directory containing the script or search for data_manager_cvs
find_project_dir() {
    # Try different methods to find the project directory
    local script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
    local current_dir="$(pwd)"
    
    # Check if we're in the project directory or a subdirectory
    if [[ -f "$current_dir/main2.py" && -f "$current_dir/topic.csv" ]]; then
        echo "$current_dir"
        return
    fi
    
    # Check if script is in the project directory
    if [[ -f "$script_dir/main2.py" && -f "$script_dir/topic.csv" ]]; then
        echo "$script_dir"
        return
    fi
    
    # Search for data_manager_cvs directory in common locations
    local search_paths=(
        "$HOME/Desktop/project/data_manager_cvs"
        "$HOME/project/data_manager_cvs"
        "$HOME/data_manager_cvs"
        "./data_manager_cvs"
        "../data_manager_cvs"
        "../../data_manager_cvs"
    )
    
    for path in "${search_paths[@]}"; do
        if [[ -f "$path/main2.py" && -f "$path/topic.csv" ]]; then
            echo "$path"
            return
        fi
    done
    
    # If not found, return empty
    echo ""
}

# Find the project directory
PROJECT_DIR=$(find_project_dir)

if [[ -z "$PROJECT_DIR" ]]; then
    echo "❌ Error: Could not find data_manager_cvs project directory."
    echo "Please ensure the project is in one of these locations:"
    echo "  - $HOME/Desktop/project/data_manager_cvs"
    echo "  - $HOME/project/data_manager_cvs"
    echo "  - Current directory or subdirectories"
    echo "  - Same directory as this script"
    exit 1
fi

echo "📍 Found project at: $PROJECT_DIR"

# Change to project directory
cd "$PROJECT_DIR" || exit 1

# Check if virtual environment exists
if [[ ! -d ".venv" ]]; then
    echo "❌ Error: Virtual environment not found at $PROJECT_DIR/.venv"
    echo "Please create the virtual environment first."
    exit 1
fi

# Activate the virtual environment
source .venv/bin/activate

# Run main2.py with all provided arguments
python main2.py "$@"

# Deactivate the virtual environment (optional, as it will deactivate when script exits)
deactivate