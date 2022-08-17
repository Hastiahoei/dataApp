import './App.css';
import Chart from './components/Chart';
import ChartSelector from './components/ChartSelector';

function App() {

  const averagePrecipitationDaysData = {
    "Jan": 7.8,
    "Feb": 6.9,
    "Mär": 7.8,
    "Apr": 8.7,
    "Mai": 12.1,
    "Jun": 12.2,
    "Jul": 11.6,
    "Aug": 10.5,
    "Sep": 9.0,
    "Okt": 8.5,
    "Nov": 8.1,
    "Dez": 8.7
  }

  const averagePrecipitationDaysMetaData = {
    title: "Durchschnittswerte Regentage pro Monat Pfullingen",
    unit: "d",
    scale: 10,
    data: averagePrecipitationDaysData
  }

  const precipitationYearsData = {
    2020: {
      "Jan": 14.0,
      "Feb": 86.8,
      "Mär": 50.5,
      "Apr": 14.9,
      "Mai": 52.1,
      "Jun": 117.1,
      "Jul": 35.8,
      "Aug": 93.2,
      "Sep": 24.2,
      "Okt": 46.8,
      "Nov": 17.2,
      "Dez": 40.0
    },
    2021: {
      "Jan": 54.5,
      "Feb": 41.5,
      "Mär": 28.8,
      "Apr": 35.1,
      "Mai": 68.1,
      "Jun": 174.1,
      "Jul": 83.0,
      "Aug": 104.2,
      "Sep": 27.8,
      "Okt": 37.2,
      "Nov": 20.2,
      "Dez": 50.1
    }
  }

  const precipitationYearsMetaData = {
    title: "Niederschlagsdaten Stuttgart Airport",
    unit: "l/m²",
    scale: 2,
    data: precipitationYearsData
  }

  return (
    <div className="App">
      <Chart
        data={averagePrecipitationDaysData}
        title={averagePrecipitationDaysMetaData.title}
        unit={averagePrecipitationDaysMetaData.unit}
        scale={averagePrecipitationDaysMetaData.scale}
      />

      <ChartSelector
        data={precipitationYearsData}
        title={precipitationYearsMetaData.title}
        unit={precipitationYearsMetaData.unit}
        scale={precipitationYearsMetaData.scale} />
    </div>
  );
}

export default App;
