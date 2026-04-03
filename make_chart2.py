import matplotlib.pyplot as plt
import matplotlib.patches as patches

# SET ACADEMIC STYLE
plt.rc('font', family='serif', serif='Times New Roman')

# CREATE HORIZONTAL ARRAYS (Thin and space-saving)
# (Left-to-Right Flow: Data -> Processing -> Intelligence)
# This design specifically uses very little vertical space.
data = [
    # Label, subtitle, description
    ("IoT Edge (Arduino)", "Data Acquisition", "GPS/IR Sensors"),
    ("Cloud Backend (Node.js)", "Orchestrator", "MongoDB/State/CORS"),
    ("AI Service (Python)", "Intelligence Layer", "XGBoost Microservice")
]

# Adjust figure size (Wide, but very short vertically)
plt.figure(figsize=(7, 1.5))

# Plot setup
ax = plt.gca()
ax.axis('off')  # Hide axes

# Define boxes
box_width = 0.22
box_height = 0.6
gap = (1.0 - (3 * box_width)) / 2
current_x = 0

for i, (label, subtitle, desc) in enumerate(data):
    # Add box
    rect = patches.Rectangle((current_x, 0.2), box_width, box_height, linewidth=1, edgecolor='black', facecolor='#f0f8ff')  # light blue face
    ax.add_patch(rect)

    # Add text
    plt.text(current_x + box_width / 2, 0.65, label, ha='center', va='center', fontsize=10, fontweight='bold')
    plt.text(current_x + box_width / 2, 0.45, subtitle, ha='center', va='center', fontsize=9, style='italic')
    plt.text(current_x + box_width / 2, 0.28, desc, ha='center', va='center', fontsize=8)

    # Add arrow (if not the last box)
    if i < 2:
        arrow_x_start = current_x + box_width
        plt.arrow(arrow_x_start, 0.5, gap * 0.9, 0, head_width=0.03, head_length=0.015, fc='black', ec='black')

    current_x += (box_width + gap)

# Save as high-resolution image
plt.savefig('system_architecture_horizontal.png', dpi=300, bbox_inches='tight')
print("Diagram saved as 'system_architecture_horizontal.png'")
