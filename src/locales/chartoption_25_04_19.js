/ chartoptions.js

export const areachartlineoptions = (colors, statusTable, filterTable, filteredData) => {
    return {
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || "";
              if (label) {
                label += " ";
              }
              if (context.parsed.y !== null) {
                const { dataIndex } = context;
                const { displayMode } = filterTable;
                const fullname =
                  filteredData[dataIndex][displayMode].name || "Unknown";
                const cleanedFullname = fullname
                  .replace(/^\((.*)\)$/, "$1")
                  .trim();
  
                return [
                  `${cleanedFullname}`,
                  `${label}`,
                  `${statusTable.datatype}`, // A mértékegység
                  `${context.parsed.y}`, // Az érték
                ];
              }
              return label;
            },
          },
          bodyColor: colors.tooltip,
          bodyFont: {
            size: 16,
            lineHeight: 1.5,
          },
          titleFont: {
            size: 16,
            color: colors.tooltip,
          },
          footerFont: {
            size: 20,
          },
          padding: 10,
          displayColors: false,
          caretSize: 16,
          backgroundColor: "#000",
          borderColor: "#000",
          borderWidth: 1,
          xAlign: "center",
          yAlign: "center",
        },
        legend: {
          labels: {
            color: colors.legend,
          },
        },
        title: {
          display: true,
          text: `${statusTable.datatype.charAt(0).toUpperCase() + statusTable.datatype.slice(1)}`,
          color: colors.legend,
          font: {
            size: 20,
          },
          position: 'top',
          align: 'center',
          padding: {
            bottom: 10,
          },
        },
        
      },
      scales: {
        x: {
          ticks: {
            color: colors.legend,
          },
        },
        y: {
          ticks: {
            color: colors.legend,
          },
          title: {
            display: true,
            text: `${statusTable.datatype}`, // Hozzáadjuk a mértékegységet az y-tengely címkéjéhez
            color: colors.legend,
          },
        },
      },
      interaction: {
        mode: "nearest",
        axis: "x",
        intersect: false,
      },
    };
  };


  // barchartoptions.js

export const barchartOptions = (colors, statusTable, filterTable, filteredData) => {
  return {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += " ";
            }
            if (context.parsed.y !== null) {
              const { dataIndex } = context;
              const fullname = filteredData[dataIndex]?.fullname || "Unknown";
              const cleanedFullname = fullname
                .replace(/^\((.*)\)$/, "$1")
                .trim();
              return [
                `${cleanedFullname}`,
                `${label}`,
                `${statusTable.datatype}`, // Measurement unit
                `${context.parsed.y}`, // Value
              ];
            }
            return label;
          },
        },
        bodyColor: colors.tooltip,
        bodyFont: {
          size: 16,
          lineHeight: 1.5,
        },
        titleFont: {
          size: 16,
          color: colors.tooltip,
        },
        footerFont: {
          size: 20,
        },
        padding: 10,
        displayColors: false,
        caretSize: 16,
        backgroundColor: "#000",
      //  borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
        xAlign: "center",
        yAlign: "center",
      },
      legend: {
        labels: {
          color: colors.legend,
          boxWidth: 0,
          font: {
            size: 20,
          },
        }
  
      },
      title: {
        display: true,
        text: `${statusTable.datatype.charAt(0).toUpperCase() + statusTable.datatype.slice(1)}`,
        color: colors.legend,
        font: {
          size: 20,
        },
        position: 'top',
        align: 'center',
        padding: {
          bottom: 10,
        },
      },
    },

    
    scales: {
      x: {
        ticks: {
          color: colors.legend,
        },
      },
      y: {
        ticks: {
          color: colors.legend,
        },
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
  };
};

export const linechartoptions = (colors, statusTable, filterTable, filteredData) => {
  return {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += " ";
            }
            if (context.parsed.y !== null) {
              const { dataIndex } = context;
              const { displayMode } = filterTable;
              const fullname =
                filteredData[dataIndex][displayMode]?.name || "Unknown";
              const cleanedFullname = fullname
                .replace(/^\((.*)\)$/, "$1")
                .trim();

              return [
                `${cleanedFullname}`,
                `${label}`,
                `${statusTable.datatype}`, // Mértékegység
                `${context.parsed.y}`, // Az érték
              ];
            }
            return label;
          },
        },
        bodyColor: colors.tooltip,
        bodyFont: {
          size: 16,
          lineHeight: 1.5,
        },
        titleFont: {
          size: 16,
          color: colors.tooltip,
        },
        footerFont: {
          size: 20,
        },
        padding: 10,
        displayColors: false,
        caretSize: 16,
        backgroundColor: "#000",
        borderColor: "#000",
        borderWidth: 1,
        xAlign: "center",
        yAlign: "center",
      },
      legend: {
        labels: {
          color: colors.legend,
        },
      },
      title: {
        display: true,
        text: `${
          statusTable.datatype.charAt(0).toUpperCase() + statusTable.datatype.slice(1)
        }`,
        color: colors.legend,
        font: {
          size: 20,
        },
        position: "top",
        align: "center",
        padding: {
          bottom: 10,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: colors.legend,
        },
      },
      y: {
        ticks: {
          color: colors.legend,
        },
        title: {
          display: true,
          text: `${statusTable.datatype}`, // Mértékegység az y-tengelyen
          color: colors.legend,
        },
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
  };
};


  