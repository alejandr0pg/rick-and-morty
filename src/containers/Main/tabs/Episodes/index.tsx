import React from 'react'
import { getAllEpisodes } from './../../../../api/episode';
import MaterialTable from 'material-table'
import { useTranslation } from 'react-i18next';

function Episodes() {
  const { t } = useTranslation("global");
  const getEpisodes = (page: number, search: string) => {
    return getAllEpisodes(page, search).then(({info, results}) => {
      console.log(info);
      console.log(results);

      return {
        data: results,
        page: page - 1,
        totalCount: info.count
      };
    });
  } 

  return (
    <div>
      <MaterialTable
        columns={[
          { title: t('episodes.table.name'), field: 'name' },
          { title: t('episodes.table.episode'), field: 'episode' },
          { title: t('episodes.table.air_date'), field: 'air_date', type: 'date' }
        ]}
        options={{
          pageSize: 20,
          pageSizeOptions: [20],
          rowStyle: {
            fontFamily: 'Roboto',
          },
          headerStyle: {
            fontFamily: 'Roboto',
          }
        }}
        data={query => getEpisodes(query.page + 1, query.search)}
        title={t('episodes.table.title')}
        localization={{
          toolbar: {
            searchPlaceholder: t('episodes.table.search')
          }
        }}
      />
    </div>
  )
}


export default Episodes

