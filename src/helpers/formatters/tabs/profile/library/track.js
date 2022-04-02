import i18n from '*/plugins/i18n'
import {
  main as formatProfileLibraryTrackMainLink
} from '*/helpers/formatters/links/profile/library/track'

export default function ({
  profileId,
  profileNickname,
  artistName,
  trackId,
  trackTitle,
  scope
}) {
  const formatProfileLibraryTrackPageTitle = () => {
    if (scope) {
      return i18n.global.t(
        `navigation.model.${scope}`,
        { modelName: trackTitle }
      )
    } else {
      return trackTitle
    }
  }

  const profileLibraryArtistPageTitle = i18n.global.t(
    'navigation.model.tracks',
    { modelName: artistName }
  )

  const profileLibraryPageTitle = i18n.global.t(
    'navigation.model.artists',
    { modelName: profileNickname }
  )

  const title = [
    formatProfileLibraryTrackPageTitle(),
    profileLibraryArtistPageTitle,
    profileLibraryPageTitle
  ].join(' | ')

  const formatPath = () => {
    switch (scope) {
      default:
        return formatProfileLibraryTrackMainLink({
          profileId,
          trackId
        }).path
    }
  }

  return {
    icon: 'music',
    title,
    path: formatPath()
  }
}
