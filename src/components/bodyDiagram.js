const BodyDiagram = () => {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.2fr 1fr", // Adjusted proportions to bring metrics closer
                gap: "10px", // Reduced gap between sections
                padding: "10px",
                backgroundColor: "#e9f4f9",
                borderRadius: "8px",
                height: "auto", // Let content define height
            }}
        >
            {/* Left Side Metrics */}
            <div>
                <MetricBox title="Height (cm)" value="165" range="163 - 183" change="+ 0.2 cm" />
                <MetricBox title="Weight (kg)" value="50" range="51 - 77" change="+ 0.2 cm" />
                <MetricBox title="BMI (kg/m2)" value="22.96" change="+ 0.2%" />
                <MetricBox title="BMR (kcal/day)" value="1432" change="+ 0.2%" />
            </div>

            {/* Center Body Diagram */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img
                    src="/images/human-body.png"
                    alt="Body Diagram"
                    style={{
                        width: "160px", // Reduced width
                        height: "150px", // Reduced height
                    }}
                />
            </div>

            {/* Right Side Metrics */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr", // Two-column layout
                    gap: "8px", // Reduced gap for tighter alignment
                }}
            >
                <MetricBox
                    title="Shoulder Girth (cm)"
                    value="83"
                    range="80 - 90"
                    change="+ 0.2 cm"
                />
                <MetricBox
                    title="Waist Dia (cm)"
                    value="100"
                    range="70 - 110"
                    change="+ 0.2 cm"
                />
                <MetricBox
                    title="Hip Dia (cm)"
                    value="122"
                    range="80 - 120"
                    change="+ 0.2 cm"
                />
                <MetricBox
                    title="Skinfold (mm)"
                    value="10"
                    range="6 - 30"
                    change="+ 0.2 mm"
                />
                <MetricBox
                    title="Waist-Hip Ratio (mm)"
                    value="10"
                    range="6 - 30"
                    change="+ 0.2 mm"
                />
                <MetricBox
                    title="Hip-Toe (mm)"
                    value="82"
                    range="6 - 30"
                    change="+ 0.2 mm"
                />
            </div>
        </div>
    );
};

const MetricBox = ({ title, value, range, change }) => {
    return (
        <div
            style={{
                backgroundColor: "#ffffff",
                padding: "5px",
                marginBottom: "5px",
                border: "1px solid #ccc",
                borderRadius: "6px",
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)", // Slightly reduced shadow
            }}
        >
            <h4 style={{ margin: "0", fontSize: "12px", color: "#666" }}>{title}</h4>
            <p style={{ margin: "3px 0", fontSize: "16px", fontWeight: "bold", color: "#333" }}>
                {value}
            </p>
            {range && (
                <p style={{ margin: "0", fontSize: "10px", color: "#888" }}>
                    Range: {range}
                </p>
            )}
            <p
                style={{
                    margin: "3px 0 0",
                    fontSize: "10px",
                    color: change.startsWith("+") ? "#28a745" : "#dc3545",
                }}
            >
                {change}
            </p>
        </div>
    );
};

export default BodyDiagram;
