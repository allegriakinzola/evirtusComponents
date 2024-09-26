import Text from "../../atoms/Text/Text.jsx";
import Card from "../../atoms/Card/Card.jsx";
import React from "react";

import PropTypes from "prop-types";

const ActivityCard = ({ dateActivite, intituleActivite, chercheurName }) => {
  return (
    <div className="flex flex-col gap-3">
      <Text>{dateActivite}</Text>
      <Card className={"flex flex-col gap-2 py-3 px-5 border border-gray-200"}>
        <Text size="small">{intituleActivite}</Text>

        <div className="flex gap-2 pl-1 ml-6">
          <div className="flex flex-col">
            <div className="h-4 w-1 bg-blue-400"></div>
            <div className="h-4 w-1 bg-yellow-300"></div>
            <div className="h-4 w-1 bg-red-500"></div>
          </div>
          <div className="flex flex-col gap-1">
            <Text
              size={"small"}
              fontWeight={"semmibold"}
              className={"text-xm text-gray-400"}
            >
              Chercheur
            </Text>
            <Text size={"small"}>{chercheurName}</Text>
          </div>
        </div>
      </Card>
    </div>
  );
};

ActivityCard.propTypes = {
  dateActivite: PropTypes.string,
  intituleActivite: PropTypes.string,
  chercheurName: PropTypes.string,
};

export default ActivityCard;
