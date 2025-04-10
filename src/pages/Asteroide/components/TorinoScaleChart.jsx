import { Line } from 'react-chartjs-2';

const TorinoScaleChart = () => {
  // Adatok definiálása
  const data = {
    labels: ['Alacsony', 'Közepes', 'Magas'],
    datasets: [
      {
        label: 'Torino Skála',
        data: [1, 5, 10], // Példa adatok, módosíthatók a skálához igazítva
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
      },
    ],
  };

  // Skála beállítása
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          callback: function(value) {
            return value === 1 ? 'Alacsony' : value === 5 ? 'Közepes' : 'Magas';
          },
        },
      },
    },
  };

  return <h1>dfsa</h1>;
};

export default TorinoScaleChart;

//<Line data={data} options={options} />

