import * as UI from "@cadolabs/sphere-ui"
import { useTranslation } from "react-i18next"

import { Title } from "./Title"

EventTable.defaultProps = {
  description: [],
}

export function EventTable ({ description }) {
  const { t } = useTranslation()

  const translationsDescription = () => {
    return description.map(row => {
      return { ...row, description: t(row.description) }
    })
  }

  const renderParams = row => {
    return row.params.map(({ name, description }) => {
      return <div key={name}>{name}: {description}</div>
    })
  }

  const renderTable = () => {
    return (
      <div className="card">
        <UI.DataTable value={translationsDescription()} showGridlines stripedRows size="small">
          <UI.Column
            field="name"
            header={t("components.eventTable.columns.name")}
            className="font-light"
          />
          <UI.Column
            body={renderParams}
            header={t("components.eventTable.columns.params")}
            className="font-light"
          />
          <UI.Column
            field="description"
            header={t("components.eventTable.columns.description")}
            className="font-light"
          />
        </UI.DataTable>
      </div>
    )
  }

  const renderTitle = () => {
    return (
      <Title>{t("components.eventTable.title")}</Title>
    )
  }

  return (
    <div className="block-content">
      {renderTitle()}
      {renderTable()}
    </div>
  )
}
